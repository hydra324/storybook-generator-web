import { HttpResponse, delay, http } from 'msw';

export const handlers = [
  http.post(`*/generate_images`, async () => {
    await delay(2000);

    return HttpResponse.json({
        imageUrls: [
            'https://img.freepik.com/free-photo/plain-smooth-green-wall-texture_53876-129746.jpg?w=1800&t=st=1709193157~exp=1709193757~hmac=0cdc78c6010047eb8bf6317582afbf917928ee64623fde49006fac3d41238e5f',
            'https://img.freepik.com/free-photo/black-brick-wall-textured-background_53876-63572.jpg?w=1800&t=st=1709193226~exp=1709193826~hmac=7df57d18d8244f4007979ab92bbe46d299f1eff33edc63f4d7a11f4c1ef8fea8',
            'https://img.freepik.com/free-photo/plain-smooth-red-wall-texture_53876-129747.jpg?w=1800&t=st=1709193284~exp=1709193884~hmac=4033b5a357af0389539292f1ca746f63e14424589d750efe7a49ee6d5ff3e349',
            'https://img.freepik.com/free-vector/kids-discussing-with-book-forest_1308-30690.jpg?size=626&ext=jpg',
            'https://img.freepik.com/premium-vector/nature-outdoor-with-cute-kids-books-letter-cubes_679557-1977.jpg?size=626&ext=jpg&ga=GA1.1.1039114739.1705691503&semt=ais',
            'https://img.freepik.com/free-vector/children-wild-animals-field_1308-31671.jpg?size=626&ext=jpg&ga=GA1.1.1039114739.1705691503&semt=ais',
            
        ]
    })
  })
];