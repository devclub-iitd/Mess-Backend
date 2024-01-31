import os
import dotenv

dotenv.load_dotenv()

ADMIN_ID = os.environ.get("ADMIN_ID", "root")
ADMIN_PASS = os.environ.get("ADMIN_PASS")

MAIL_ID = os.environ.get("MAIL_ID", "mess.iitdelhi@gmail.com")
MAIL_PASS = os.environ.get("MAIL_PASS", "")

SERVER = os.environ.get("SERVER")

def path(str):
    return os.path.join(os.path.dirname(__file__), str)
