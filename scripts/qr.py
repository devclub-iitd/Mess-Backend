import json
import qrcode
from util import *

tokens = [r.strip().split(",") for r in open(path("outputs/tokens.csv")).readlines()]

for (k, t, d) in tokens:
    data = json.dumps({"kerberos": k, "token": t})
    img = qrcode.make(data)
    img.save(path(f"outputs/qr/{k}.png"))
