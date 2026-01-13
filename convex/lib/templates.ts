import { LOGO_URL } from "./constants";

export const CONTACT_FORM_ADMIN_NOTIFICATION_TEMPLATE = ({
    name,
    email,
    phone,
    message,
    submittedAt,
}: {
    name: string;
    email: string;
    phone?: string;
    message: string;
    submittedAt: string; // ISO string or formatted date
}) => {
    const html = `
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>New Contact Form Message</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5; padding: 20px 0;">
      <tr>
        <td align="center">
          <!-- Main container -->
          <table cellpadding="0" cellspacing="0" border="0" width="600" style="background-color: #ffffff; border-radius: 6px; overflow: hidden;">
            
            <!-- Header -->
            <tr>
              <td style="padding: 20px 30px; background-color: #111111;">
                <h1 style="margin: 0; font-size: 18px; color: #ffffff;">
                  New Contact Form Message
                </h1>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 30px;">
                <p style="font-size: 14px; color: #333333; margin-bottom: 20px;">
                  A new message has been submitted via the website contact form.
                </p>

                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 14px; color: #333333;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td>
                    <td style="padding: 8px 0;">
                      ${name}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                    <td style="padding: 8px 0;">
                      <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">
                        ${email}
                      </a>
                    </td>
                  </tr>
                  ${
                      phone
                          ? `
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                    <td style="padding: 8px 0;">${phone}</td>
                  </tr>
                  `
                          : ""
                  }
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Submitted:</td>
                    <td style="padding: 8px 0;">${submittedAt}</td>
                  </tr>
                </table>

                <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 24px 0;" />

                <p style="font-size: 14px; font-weight: bold; margin-bottom: 8px;">
                  Message:
                </p>

                <div style="font-size: 14px; color: #333333; background-color: #f7f7f7; padding: 16px; border-radius: 6px; line-height: 1.6;">
                  ${message}
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding: 16px 30px; background-color: #fafafa; font-size: 12px; color: #666666;">
                This notification was generated automatically from the website contact form.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
    return html;
};

export const CONTACT_FORM_RECEIVED_TEMPLATE = ({
    name,
    email,
    message,
}: {
    name: string;
    email: string;
    message: string;
}) => {
    const html = `
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Message Received</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5; padding: 20px 0;">
      <tr>
        <td align="center">
          <!-- Main container -->
          <table cellpadding="0" cellspacing="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
            
            <!-- Banner -->
            <tr>
              <td>
                <img src="${LOGO_URL}" alt="Company Logo" style="display: block; width: 150px; height: 100px; object-fit: contain;" />
              </td>
            </tr>

            <!-- Body content -->
            <tr>
              <td style="padding: 30px;">
                <h1 style="font-size: 20px; font-weight: bold; margin-bottom: 16px;">
                  Hello ${name},
                </h1>

                <p style="font-size: 14px; color: #333333; margin-bottom: 16px;">
                  Thank you for reaching out to <strong>LZJ Esoleen Limited</strong>.
                  We’ve received your message and our team will review it shortly.
                </p>

                <p style="font-size: 14px; color: #333333; margin-bottom: 16px;">
                  <strong>Your message:</strong>
                </p>

                <div style="font-size: 14px; color: #333333; background-color: #f7f7f7; padding: 16px; border-radius: 6px; margin-bottom: 20px; line-height: 1.6;">
                  ${message}
                </div>

                <p style="font-size: 14px; color: #333333; margin-bottom: 16px;">
                  If necessary, we may contact you via <strong>${email}</strong> for further clarification.
                </p>

                <p style="font-size: 14px; color: #333333; margin: 0;">
                  We appreciate your interest and will get back to you as soon as possible.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="padding: 20px;">
                <img src="${LOGO_URL}" alt="Highland Security Logo" height="30" style="display: block; margin: 0 auto;" />
                <p style="margin: 8px 0 0 0; font-size: 16px; font-weight: bold; color: #111111;">
                  LZJ Esoleen
                </p>

                <!-- Social icons -->
                <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 12px;">
                  <tr>
                    <td style="padding-right: 8px;">
                      <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" height="30" width="30" style="display: block;" /></a>
                    </td>
                    <td style="padding-right: 8px;">
                      <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" height="30" width="30" style="display: block;" /></a>
                    </td>
                    <td>
                      <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" height="30" width="30" style="display: block;" /></a>
                    </td>
                  </tr>
                </table>

                <!-- Address -->
                <p style="margin: 8px 0 0 0; font-size: 14px; color: #555555;">
                  WARRI, DELTA STATE
                </p>
                <p style="margin: 4px 0 0 0; font-size: 14px; color: #555555;">
                  info@lzjesoleen.com &nbsp; +234 701 241 7471
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
    return html;
};
