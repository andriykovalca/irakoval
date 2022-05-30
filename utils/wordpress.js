const BASE_URL = 'https://irakoval.com/wp-json/wp/v2';


export async function getPortfolios() {
  // const portfoliosRes = await fetch(BASE_URL + '/portfolio?_fields=id,slug,title,_links,_embedded&_embed&per_page=100&page=1');
  // const portfolios = await portfoliosRes.json();
  
  // return portfolios;

  const [part1Res, part2Res] = await Promise.all([
    fetch(BASE_URL + '/portfolio?_fields=id,slug,title,_links,_embedded&_embed&per_page=100&page=1'),
    fetch(BASE_URL + '/portfolio?_fields=id,slug,title,_links,_embedded&_embed&per_page=100&page=2')
  ]);

  const [part1, part2] = await Promise.all([
    part1Res.json(), 
    part2Res.json()

  ])
  const portfolios = part1.concat(part2);
  return portfolios;
}

export async function getPortfolio(slug) {
  const portfolios = await getPortfolios();
  const portfolioArray = portfolios.filter((portfolio) => portfolio.slug == slug);
  const portfolio = portfolioArray.length > 0 ? portfolioArray[0] : null;
  return portfolio;
}

export async function getPosts() {
  const postsRes = await fetch(BASE_URL + '/posts?_embed');
  const posts = await postsRes.json();
  return posts;
}

export async function getPost(slug) {
  const posts = await getPosts();
  const postArray = posts.filter((post) => post.slug == slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case 'posts':
      elements = await getPosts();
      break;
    case 'portfolios':
      elements = await getPortfolios();
      break;
  }
  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });
  return elementsIds;
}
