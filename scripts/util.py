import os

ADMIN_ID = "root"
ADMIN_PASS = ""
SERVER = "https://mess-iitd.herokuapp.com"

MAIL_ID = "mess.iitdelhi@gmail.com"
MAIL_PASS = ""

def path(str):
    return os.path.join(os.path.dirname(__file__), str)
