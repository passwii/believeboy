import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, phone, email, inquiryType, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Believeboy 咨询 <contact@believeboy.com>",
      to: ["yawei@believeboy.com"],
      subject: `【新咨询】${name} - ${inquiryType || "在线咨询"}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #2563eb, #0891b2); color: white; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 600;">📬 收到新的网站咨询</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">${new Date().toLocaleString('zh-CN')}</p>
          </div>
          
          <div style="background: #f8fafc; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; width: 100px; color: #64748b; font-weight: 500;">姓名</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: 500;">公司</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${company || '未填写'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: 500;">电话</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 600;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: 500;">邮箱</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #64748b; font-weight: 500;">咨询类型</td>
                <td style="padding: 12px 0; color: #0f172a;">${inquiryType || '未选择'}</td>
              </tr>
            </table>
            
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e2e8f0;">
              <h3 style="margin: 0 0 12px 0; color: #374151; font-size: 16px;">留言内容</h3>
              <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; color: #4b5563; line-height: 1.6;">
                ${message ? message.replace(/\n/g, '<br>') : '用户未填写留言内容'}
              </div>
            </div>
            
            <div style="margin-top: 24px; text-align: center; padding: 16px; background: #eff6ff; border-radius: 8px;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                💡 请及时跟进此咨询，建议在24小时内联系客户
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
