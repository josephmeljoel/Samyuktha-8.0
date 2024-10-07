import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, event, college, department, phonenumber } = req.body; // The form fields we are handling

    try {
      const AIRTABLE_PAT =
        "patUZ3lLYaVpCIpJx.74309a38cd816ca0b2c9d6a222bba20d2b46c8ebb15889bcc59f19ec74bbd6e8";
      const AIRTABLE_BASE_ID = "appgHAVetgIyskG9Q";
      const AIRTABLE_TABLE_NAME = "tblVCIM0IoMfWEiQJ";

      const base = new Airtable({ apiKey: AIRTABLE_PAT }).base(
        AIRTABLE_BASE_ID
      );

      const record = await base(AIRTABLE_TABLE_NAME).create([
        {
          fields: {
            Name: name,
            Event: event,
            College: college,
            Department: department,
            Phonenumber: phonenumber,
          },
        },
      ]);

      // Return success response
      res.status(200).json({ success: true, record });
    } catch (error) {
      console.error("Error creating record in Airtable:", error);
      res.status(500).json({ success: false, error: error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
