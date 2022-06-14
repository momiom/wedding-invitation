/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Client } from '@notionhq/client';

import { MainInput } from '@/components/uiGroup/invitationForm';
import { getUniqueStr } from '@/lib/lib';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const params = req.body;
    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    const requests = make(params as MainInput);
    const responses: Array<any> = [];
    const errors: Array<any> = [];
    let count = 0;

    for (let i = 0; i < requests.length; i++) {
      try {
        const response = await notion.pages.create(requests[i]);
        count++;
        responses.push(response);
      } catch (err: any) {
        const body = JSON.parse(err.body);
        errors.push({ error: err, body });
      }
    }

    if (errors.length > 0) {
      console.log(errors);
      res.status(500).json(errors);
    }
    res.status(200).json({ message: 'ok', count, responses });
  } else {
    res.status(405);
  }
}

function make(params: MainInput): Array<any> {
  const guests = [];
  const id = getUniqueStr();
  const main = {
    parent: {
      database_id: process.env.NOTION_DATABASE_ID!,
    },
    properties: {
      attendance: {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: params.attendance,
            },
          },
        ],
      },
      id: {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: id,
            },
          },
        ],
      },
      familyName: {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: params.familyName,
            },
          },
        ],
      },
      givenName: {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: params.givenName,
            },
          },
        ],
      },
      familyNameKana: {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: params.familyNameKana,
            },
          },
        ],
      },
      givenNameKana: {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: params.givenNameKana,
            },
          },
        ],
      },
      postCode: {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: params.postCode,
            },
          },
        ],
      },
      pref: {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: params.pref,
            },
          },
        ],
      },
      addressLevel2: {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: params.addressLevel2,
            },
          },
        ],
      },
      addressLevel3: {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: params.addressLevel3,
            },
          },
        ],
      },
      tel: {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: params.tel,
            },
          },
        ],
      },
      email: {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: params.email,
            },
          },
        ],
      },
      allergy: {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: params.allergy,
            },
          },
        ],
      },
      message: {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: params.message,
            },
          },
        ],
      },
    },
  };
  guests.push(main);

  if ('guests' in params) {
    const addGuests = params.guests;
    addGuests!.map((v) => {
      guests.push({
        parent: {
          database_id: process.env.NOTION_DATABASE_ID!,
        },
        properties: {
          id: {
            type: 'rich_text',
            rich_text: [
              {
                text: {
                  content: id,
                },
              },
            ],
          },
          familyName: {
            type: 'rich_text',
            rich_text: [
              {
                text: {
                  content: v.familyName,
                },
              },
            ],
          },
          givenName: {
            type: 'rich_text',
            rich_text: [
              {
                text: {
                  content: v.givenName,
                },
              },
            ],
          },
          familyNameKana: {
            type: 'rich_text',
            rich_text: [
              {
                text: {
                  content: v.familyNameKana,
                },
              },
            ],
          },
          givenNameKana: {
            type: 'rich_text',
            rich_text: [
              {
                text: {
                  content: v.givenNameKana,
                },
              },
            ],
          },
          allergy: {
            type: 'rich_text',
            rich_text: [
              {
                text: {
                  content: v.allergy,
                },
              },
            ],
          },
        },
      });
    });
  }

  return guests;
}
