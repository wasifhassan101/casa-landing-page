import { GoogleSpreadsheet } from 'google-spreadsheet';
import { NextRequest, NextResponse } from 'next/server'
import { JWT } from 'google-auth-library';


const serviceAccountAuth = new JWT({
    email: process.env.CLIENT_EMAIL,
    key: process.env.PRIVATE_KEY,
    scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
    ],
});

const doc = new GoogleSpreadsheet("1VnaJ2J3aTThvcr3pJVyPt0iRgQFz8lc_sBZ0SBbhRKE", serviceAccountAuth)

export async function POST(req: NextRequest) {
    const data = await req.json()
    const email = data.email;

    try {
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];
        const date = new Date();
        const formattedDate = date.toLocaleString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });

        await sheet.addRow({ Email: email, Date: formattedDate });

        return NextResponse.json({ status: 200 })
    } catch (error) {
        return NextResponse.json(
            { message: "Error", error },
            {
                status: 500,
            }
        );
    }
}