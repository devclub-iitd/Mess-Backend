from email.mime.application import MIMEApplication
from email.mime.text import MIMEText
import smtplib

from email.mime.multipart import MIMEMultipart
from email.mime.image import MIMEImage

from util import *

s = smtplib.SMTP(host="smtp.gmail.com", port=587)
s.starttls()
s.login(user=MAIL_ID, password=MAIL_PASS)
print(s)
users = [r.strip().split(",") for r in open(path("data/new_users.csv")).readlines()]

for (k, h, n) in users:
    email_id = f"{k}@iitd.ac.in"
    msg = MIMEMultipart("alternative")
    msg["Subject"] = "[IMPORTANT] Udaigiri Mess QR Code for Entry"
    msg["From"] = f"IIT Delhi Mess <{MAIL_ID}>"
    msg["To"] = f"{n.title()} | {h} <{email_id}>"

    text = MIMEText(
        f"Dear {n.title()} <br> \
        <h4>Greetings from Udaigiri Mess!</h4><br> \
        We are introducing a system of <strong>QR-code based digital mess card</strong>, \
        where every student will have a unique QR code, \
        which they will have to show while entering the mess to get their meals.<br>\
        Please save this attached QR code, and <strong>remember to carry it with you to the mess</strong>.<br> \
        <img src='cid:qr'><br> \
        We suggest you to flag this mail as important. <br> \
        Regards,<br>\
        Udaigiri Mess",
        "html",
    )
    msg.attach(text)
    try:
        file = open(path(f"outputs/qr/{k}.png"), "rb").read()
    except:
        print("ERROR: QR Not Found for", k)
        continue

    image = MIMEImage(file)
    image.add_header("Content-ID", "<qr>")
    msg.attach(image)

    attach = MIMEApplication(file, Name=f"qr_{k}.png")
    attach["Content-Disposition"] = f"attachment; filename=qr_{k}.png"
    msg.attach(attach)

    r = s.sendmail(MAIL_ID, email_id, msg.as_string())
    print(r, k)
