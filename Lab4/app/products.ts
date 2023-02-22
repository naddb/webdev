export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;

  images: object;

  prodLink: string;

  rating: number;
}

export const productsList = [
  {
    id: 1,
    name: 'Oscar Wilde- Portrait of Dorian Grey',
    price: 1383,
    description:
      'Worldwide classic, the most popular book written by Oscar Wilde.Problems written in this book are relevant till this day.',
    images: [
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/hc0/33377873952798/uajld-o-portret-doriana-grea-100996924-1-Container.jpg',
    ],
    prodLink:
      'https://kaspi.kz/shop/p/uail-d-o-portret-doriana-greja-100996924/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSyxpQYx-NGLK_RbGCtOs2c-QYMvjJPmQ7c-BRVIm9QYJEpdbVYv6MtxoCFywQAvD_BwE#!/item',
    rating: 5,
  },
  {
    id: 2,
    name: 'Agatha Christie- The A.B.C Murders',
    price: 1907,
    description:
      'The A.B.C. Murders is a work of detective fiction by British writer Agatha Christie, featuring her characters Hercule Poirot, Arthur Hastings and Chief Inspector Japp, as they contend with a series of killings by a mysterious murderer known only as "A.B.C.".',
    images: [
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfc/h5b/34248519352350/kristi-a-ubijstva-po-alfavitu-101516844-1.jpg',
    ],
    prodLink:
      'https://kaspi.kz/shop/p/kristi-a-ubiistva-po-alfavitu-101516844/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSyxpQYx-NGLK_RbGCtOs2c-QYMvjJPmQ7c-BRVIm9QYJEpdbVYv6MtxoCFywQAvD_BwE#!/item',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jane Austen-Pride and Prejudice',
    price: 1647,
    description:
      'The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.',
    images: [
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6e/hb8/32670592729118/ostin-dz-gordost-i-predubezdenie-100326806-1-Container.jpg',
    ],
    prodLink:
      'https://kaspi.kz/shop/p/ostin-dzh-gordost-i-predubezhdenie-100326806/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSyxpQYx-NGLK_RbGCtOs2c-QYMvjJPmQ7c-BRVIm9QYJEpdbVYv6MtxoCFywQAvD_BwE#!/item',
    rating: 5,
  },

  {
    id: 4,
    name: 'Phone 14 pink',
    price: 799,
    description:
      ' It follows the experiences of an unnamed protagonist struggling with insomnia. Inspired by his doctors exasperated remark that insomnia is not suffering, the protagonist finds relief by impersonating a seriously ill person in several support groups. Then he meets a mysterious man named Tyler Durden and establishes an underground fighting club as radical psychotherapy.',
    images: [
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb7/hdd/49416727691294/palanik-c-bojcovskij-klub-104155644-1.jpg',
    ],
    prodLink:
      'https://kaspi.kz/shop/p/palanik-ch-boitsovskii-klub-104155644/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSyxpQYx-NGLK_RbGCtOs2c-QYMvjJPmQ7c-BRVIm9QYJEpdbVYv6MtxoCFywQAvD_BwE#!/item',
    rating: 5,
  },

  {
    id: 5,
    name: 'Dinmukhamed Kunaev-About my time',
    price: 4990,
    description:
      'The book of memoirs of the famous political and statesman of Kazakhstan D.A.Kunaev consists of three parts. In the first part, the author tells about his childhood and family, the years of study and the beginning of his work, the second part is devoted to the life of the republic in different years.',
    images: [
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/h53/49600123338782/k-onaev-d-o-moem-vremeni-ot-stalina-do-gorbaceva-104247819-1.jpg',
    ],
    prodLink:
      'https://kaspi.kz/shop/p/-onaev-d-o-moem-vremeni-ot-stalina-do-gorbacheva-104247819/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSyxpQYx-NGLK_RbGCtOs2c-QYMvjJPmQ7c-BRVIm9QYJEpdbVYv6MtxoCFywQAvD_BwE#!/item',
    rating: 5,
  },

  {
    id: 6,
    name: 'Harper Lee-To kill a mockingbird',
    price: 2414,
    description:
      'The plot and characters are loosely based on Lees observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.',
    images: [
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h53/31944925413406/li-h-ubit-peresmesnika-26003932-1-Container.jpg',
    ],
    prodLink:
      'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-128gb-zolotistyi-106363302/?c=750000000#!/item',
    rating: 5,
  },
  {
    id: 7,
    name: 'Charlotta Bronte-Jane Eyre',
    price: 1713,
    description:
      'The novel revolutionised prose fiction by being the first to focus on its protagonists moral and spiritual development through an intimate first-person narrative, where actions and events are coloured by a psychological intensity. ',
    images: [
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4e/h71/31869251911710/bronte-sh-dzhein-eir-26008159-1.jpg',
    ],
    prodLink:
      'https://kaspi.kz/shop/p/bronte-sh-dzhein-eir-26008159/?c=750000000#!/item',
    rating: 5,
  },
  {
    id: 8,
    name: 'Frances Burnett-The Secret Garden',
    price: 1895,
    description:
      'Set in England, it is one of Burnetts most popular novels and seen as a classic of English childrens literature. Several stage and film adaptations have been made',
    images: [
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hff/hc6/34300229976094/bernett-f-e-h-tainstvennyj-sad-101375607-1.jpg',
    ],
    prodLink:
      'https://kaspi.kz/shop/p/bernett-f-e-h-tainstvennyi-sad-101375607/?c=750000000#!/item',
    rating: 5,
  },
  {
    id: 9,
    name: 'Jack London -Martin Eden',
    price: 799,
    description:
      'Eden represents writers frustration with publishers. The central theme of Edens developing artistic sensibilities places the novel in the tradition of the Künstlerroman, which narrates an artists formation and development',
    images: [
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf8/hca/46198049013790/london-d-martin-iden-101137240-1-Container.jpg',
    ],
    prodLink:
      'https://kaspi.kz/shop/p/london-d-martin-iden-101137240/?c=750000000#!/item',
    rating: 4.5,
  },
  {
    id: 10,
    name: 'Maria Remarque-Three Comrades',
    price: 2339,
    description:
      'It is written in first person by the main character Robert Lohkamp, whose somewhat disillusioned outlook on life is due to his horrifying experiences in the trenches of the First World Wars French-German front. He shares these experiences with Otto Köster and Gottfried Lenz, his two comrades with whom he runs an auto-repair shop in what may be late-1920s Berlin',
    images: [
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc4/h5f/32018931187742/remark-e-m-tri-tovarisa-100010730-1-Container.jpg',
    ],
    prodLink:
      'https://kaspi.kz/shop/p/remark-e-m-tri-tovarischa-100010730/?c=750000000#!/item',
    rating: 5,
  },
];
