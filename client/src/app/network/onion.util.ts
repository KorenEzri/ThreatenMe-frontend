import { network, routes } from './';
export const scrapeWebsite = async (
  url: string,
  selector: string,
  attribute?: string,
) => {
  try {
    const { data } = await network.post(routes.onion.scrape, {
      url,
      selector,
      attribute,
    });
    console.log(data);
    return data;
  } catch ({ message }) {
    console.log(
      'Error at scrapeWebsite() at onion.util.ts at ~line 2,',
      message,
    );
    return 'ERROR';
  }
};
