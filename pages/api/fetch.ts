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

      var fieldName = "Name";
      var value = req.body.value;

      const record = await base(AIRTABLE_TABLE_NAME)
        .select({
          filterByFormula: `{${fieldName}} = '${value}'`, // Constructing the filter formula
        })
        .all();

      // const record = await await base(AIRTABLE_TABLE_NAME).select().all(); // Use .all() to fetch all records

      // Return success response
      const fetch_records = record.map((record) => ({
        id: record.id,
        fields: record.fields,
      }));
      res.status(200).json({ success: true, fetch_records });
    } catch (error) {
      console.error("Error creating record in Airtable:", error);
      res.status(500).json({ success: false, error: error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
