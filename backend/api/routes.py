from flask import jsonify, request, send_from_directory
from . import api_bp
from .data import experiences_data, projects_data
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import json
import os

@api_bp.route('/experiences', methods=['GET'])
def get_experiences():
    return jsonify({
        "status": "success",
        "data": experiences_data
    })

@api_bp.route('/projects', methods=['GET'])
def get_projects():
    return jsonify({
        "status": "success",
        "data": projects_data
    })

@api_bp.route('/images/<path:filename>')
def serve_image(filename):
    # Determine the absolute path to backend/images directory
    backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    images_dir = os.path.join(backend_dir, 'images')
    return send_from_directory(images_dir, filename)

@api_bp.route('/contact', methods=['POST'])
def handle_contact():
    data = request.get_json()
    if not data:
        return jsonify({"status": "error", "message": "No data provided"}), 400

    name = data.get('name', 'Portfolio Visitor')
    email = data.get('email', 'No email provided')
    subject = data.get('subject', 'New Contact Request')
    message = data.get('message', 'No message provided')
    
    # We will grab credentials from environment variables later
    sender_email = os.environ.get('EMAIL_USER', 'your_email@example.com')
    sender_password = os.environ.get('EMAIL_PASS', 'your_app_password')
    receiver_email = "kushagrasaruparia14@gmail.com"
    
    try:
        print("--- NEW CONTACT REQUEST ---")
        print(f"From: {name} <{email}>")
        print(f"Subject: {subject}")
        print("---------------------------")
        
        # Email construction (using alternative for both plain text and HTML)
        msg = MIMEMultipart('alternative')
        msg['From'] = sender_email
        msg['To'] = receiver_email
        msg['Subject'] = subject  # Using the exact subject from the form
        
        # Plain text fallback
        text_content = f"""
New Message from your Portfolio!

From: {name} ({email})
Subject: {subject}

Message:
{message}
"""
        
        # Beautiful HTML version
        html_content = f"""
        <html>
          <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 30px; background-color: #ffffff; border: 1px solid #eaeaea; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="border-bottom: 2px solid #f0f0f0; padding-bottom: 15px; margin-bottom: 20px;">
              <h2 style="color: #111827; margin: 0; font-size: 24px;">📬 New Portfolio Contact</h2>
            </div>
            
            <div style="margin-bottom: 25px;">
              <p style="margin: 0 0 8px 0; font-size: 16px;"><strong>From:</strong> {name}</p>
              <p style="margin: 0 0 8px 0; font-size: 16px;"><strong>Email:</strong> <a href="mailto:{email}" style="color: #2563eb; text-decoration: none;">{email}</a></p>
              <p style="margin: 0 0 0 0; font-size: 16px;"><strong>Subject:</strong> {subject}</p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; border-left: 4px solid #2563eb; border-radius: 6px;">
              <p style="margin: 0; font-size: 16px; white-space: pre-wrap; color: #1e293b;">{message}</p>
            </div>
            
            <div style="margin-top: 40px; text-align: center; font-size: 13px; color: #94a3b8; border-top: 1px solid #eaeaea; padding-top: 20px;">
              <p style="margin: 0;">This email was automatically sent from your portfolio website's contact form.</p>
            </div>
          </body>
        </html>
        """
        
        # Attach parts (HTML goes last as it is the preferred format)
        part1 = MIMEText(text_content, 'plain')
        part2 = MIMEText(html_content, 'html')
        
        msg.attach(part1)
        msg.attach(part2)
        
        # If credentials exist, send the email
        if sender_email != 'your_email@example.com' and sender_email is not None:
            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.starttls()
            server.login(sender_email, sender_password)
            server.send_message(msg)
            server.quit()
            print("Email sent successfully!")
        else:
            print("Email not sent: EMAIL_USER environment variable not configured.")

        return jsonify({"status": "success", "message": "Message processed"})
        
    except Exception as e:
        print(f"Failed to send email: {e}")
        # Return success for now so the UI updates properly while testing
        return jsonify({"status": "success", "message": "Message logged but email failed"})

