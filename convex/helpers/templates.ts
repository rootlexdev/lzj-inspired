import { LOGO_URL } from "./constants";

export const USER_INVITATION_TEMPLATE = ({ email }: { email: string }) => {
    const html = `
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>User Invitation</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5; padding: 20px 0;">
     <!-- Banner -->
            <tr>
              <td>
                <img src="${LOGO_URL}" alt="Company Logo" style="display: block; width: 100%; height: 150px; object-fit: contain;" />
              </td>
            </tr>
      <tr>
        <td align="center">
          <!-- Main Container -->
          <table cellpadding="0" cellspacing="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; padding: 20px;">
            <tr>
              <td>
                <h1 style="font-size: 20px; font-weight: bold; margin-bottom: 16px;">Hello ${email}</h1>
                <p style="font-size: 14px; color: #333333; margin: 0 0 12px 0;">Welcome to Highland Security Services</p>
                <p style="font-size: 14px; color: #333333; margin: 0 0 20px 0;">
                  An account has been created for you on the dashboard.<br/>
                  You can sign in using this email.
                </p>

                <!-- Login Email Row -->
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 20px;">
                  <tr>
                    <td style="font-size: 14px; font-weight: bold; padding: 4px 0; color: #333333;">Login Email</td>
                    <td style="font-size: 14px; font-weight: bold; padding: 4px 0; color: #333333;">${email}</td>
                  </tr>
                </table>

                <p style="font-size: 14px; color: #333333; margin: 0;">Welcome Onboard</p>
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
