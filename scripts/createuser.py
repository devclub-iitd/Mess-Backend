import requests
from util import *

users = [r.strip().split(",") for r in open(path("data/new_users.csv")).readlines()]

api = requests.session()
r = api.post(
    f"{SERVER}/auth/login",
    json={"kerberos": ADMIN_ID, "password": ADMIN_PASS},
)
if r.status_code >= 400:
    print("ERROR", r.text)

print(r)
print(r.cookies)

for (kerberos, hostel, messName, name) in users:
    r = api.post(
        f"{SERVER}/manager/createUser",
        json={"kerberos": kerberos, "name": name, "hostel": hostel, "messName": messName},
    )
    if r.status_code >= 400:
        print("ERROR", kerberos, r.text)
    r = api.get(
        f"{SERVER}/manager/getAccessTokens?kerberos={kerberos}",
    )
    tokens = r.json()
    if len(tokens) == 0:
        r = api.post(
            f"{SERVER}/manager/createAccessToken",
            json={"kerberos": kerberos},
        )
        if r.status_code >= 400:
            print("ERROR", kerberos, r.text)
        token = r.json()
    else:
        token = tokens[0]
        print("[WARNING] Token already exists")
    with open(path("outputs/tokens.csv"), "a") as out:
        out.write(f"{kerberos},{token['token']},{token['created_time']}\n")
    print(token)
