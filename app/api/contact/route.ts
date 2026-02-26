import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const sheetyUrl = process.env.SHEETY_API_URL

    if (!sheetyUrl) {
      console.error('SHEETY_API_URL is not defined in environment variables')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Sheety expects the root key to be the singular form of your sheet name
    // After renaming your sheet to 'inquiries', use 'inquiry' here.
    const payload = {
      inquiry: {
        name,
        email,
        message,
        date: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
      }
    }

    const response = await fetch(sheetyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Sheety API Error:', errorText)
      throw new Error(`Sheety returned ${response.status}`)
    }

    console.log('Inquiry successfully saved to Google Sheets via Sheety')

    return NextResponse.json(
      { message: 'Inquiry received and saved successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
