import emailjs from '@emailjs/browser'

emailjs.init(process.env.PUBLIC_KEY!)

export const sendEmail = async (templateParams: any) => {
  try {
    const response = await emailjs.send(
      process.env.SERVICE_ID!,
      process.env.TEMPLATE_ID!,
      templateParams
    )
  } catch (error: any) {
    console.error('Error sending email:', error.response || error.message)
  }
}
