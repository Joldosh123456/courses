export const sorting = ['newest', 'top-rated']




interface review{
  text: string,
  rated: number,
  likes: number,
  liked: boolean,
  date: any,
  user: {
    img: string,
    name: string
  },
  replies?: review[]
}

export const reviewsArr: review[] = [
  {
    text: 'So when your site is looked for on the search engine it will be very easy to come across as it will come up as one of the first. This will bring many more people to your web site as well as increase your Google PageRank.',
    rated: 5,
    likes: 20,
    liked: false,
    date: '09.03.2020',
    user: {
      img: 'https://s3-alpha-sig.figma.com/img/2cf0/b79c/2d2e2a35a7e3191b7ec0537ab5f3f220?Expires=1686528000&Signature=dkSsatl-mNmRR-idHxjXXYSElCfrejn8BX~qwU1DReGK7x6pQ70BLJzgrI6KT9TAdI~mkvyD3lJxNQbR0sGjybJP52CCcxpjK1f0cCvERqBDMCQlvoO3AkSEBN65oh5KLTYa186opbcMjryI0qYqMI4QDeKKuYBCcDXxkiy4hGQCX2PJ9Cfa0XhdubdrFANhJIj38u0tFEanfqsBpL-TnFW0NyQr6cCiTYWW2Ssl~BdaF7IUjcmRgVulXKrN-4ho~B0z0XR208D2Wdo50iLH9tM07NUDsR6ArFmnj89iG05clVwYtPgNQ~oo7pjRnyenv8eOdu9ynSD8xravzQLe5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Ralph Edwards'
    },
    replies: [
      {
        text: 'So when your site is looked for on the search engine it will be very easy to come across as it will come up as one of the first. This will bring many more people to your web site as well as increase your Google PageRank.',
        rated: 5,
        likes: 0,
        liked: false,
        date: '09.04.2020',
        user: {
          img: 'https://s3-alpha-sig.figma.com/img/c471/701e/252aab09f2634c11515bd3309d481eaf?Expires=1686528000&Signature=cpRXy0nVaBYYsYZvWRDfbI4l3PREERXupUW3KdZl054Ma2jUbceZOjF7yUij9MaFSvQ1MZ59cigE7KdC-y69JshxhFPjL~9sQBo9RR4COl4grhtFxs~wHlN~aZr3wSe7myBp1RiPjjZ7rmidThWzHYnCvSzYp2-C7G13CH4UIAPSHwehIjwmK-OLHWfbxn9hTUGXXKrqMgMSBRIiWGQGKiA~zztgDmDq6JFiRUb4aCc8FgfQGvx9G~74pz49-Tf5F6alwmosrGAWK4owCCCh4o~VwZHTKftAi--QpS6yJJXR0UYM10tDKPMH8CqavcWnydgWd9LDbocW6BFdFpibTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          name: 'Suraj Gregory'
        }
      },
      {
        text: 'So when your site is looked for on the search engine it will be very easy to come across as it will come up as one of the first. This will bring many more people to your web site as well as increase your Google PageRank.',
        rated: 5,
        likes: 0,
        liked: false,
        date: '09.05.2020',
        user: {
          img: 'https://s3-alpha-sig.figma.com/img/2cf0/b79c/2d2e2a35a7e3191b7ec0537ab5f3f220?Expires=1686528000&Signature=dkSsatl-mNmRR-idHxjXXYSElCfrejn8BX~qwU1DReGK7x6pQ70BLJzgrI6KT9TAdI~mkvyD3lJxNQbR0sGjybJP52CCcxpjK1f0cCvERqBDMCQlvoO3AkSEBN65oh5KLTYa186opbcMjryI0qYqMI4QDeKKuYBCcDXxkiy4hGQCX2PJ9Cfa0XhdubdrFANhJIj38u0tFEanfqsBpL-TnFW0NyQr6cCiTYWW2Ssl~BdaF7IUjcmRgVulXKrN-4ho~B0z0XR208D2Wdo50iLH9tM07NUDsR6ArFmnj89iG05clVwYtPgNQ~oo7pjRnyenv8eOdu9ynSD8xravzQLe5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          name: 'Margaret Donnelly'
        }
      },
    ]
  },
  {
    text: 'So when your site is looked for on the search engine it will be very easy to come across as it will come up as one of the first. This will bring many more people to your web site as well as increase your Google PageRank.',
    rated: 5,
    likes: 0,
    liked: false,
    date: '24.04.2022',
    user: {
      img: 'https://s3-alpha-sig.figma.com/img/c471/701e/252aab09f2634c11515bd3309d481eaf?Expires=1686528000&Signature=cpRXy0nVaBYYsYZvWRDfbI4l3PREERXupUW3KdZl054Ma2jUbceZOjF7yUij9MaFSvQ1MZ59cigE7KdC-y69JshxhFPjL~9sQBo9RR4COl4grhtFxs~wHlN~aZr3wSe7myBp1RiPjjZ7rmidThWzHYnCvSzYp2-C7G13CH4UIAPSHwehIjwmK-OLHWfbxn9hTUGXXKrqMgMSBRIiWGQGKiA~zztgDmDq6JFiRUb4aCc8FgfQGvx9G~74pz49-Tf5F6alwmosrGAWK4owCCCh4o~VwZHTKftAi--QpS6yJJXR0UYM10tDKPMH8CqavcWnydgWd9LDbocW6BFdFpibTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Suraj Gregory'
    }
  },
  {
    text: 'So when your site is looked for on the search engine it will be very easy to come across as it will come up as one of the first. This will bring many more people to your web site as well as increase your Google PageRank.',
    rated: 2,
    likes: 0,
    liked: false,
    date: '23.04.2022',
    user: {
      img: 'https://s3-alpha-sig.figma.com/img/2cf0/b79c/2d2e2a35a7e3191b7ec0537ab5f3f220?Expires=1686528000&Signature=dkSsatl-mNmRR-idHxjXXYSElCfrejn8BX~qwU1DReGK7x6pQ70BLJzgrI6KT9TAdI~mkvyD3lJxNQbR0sGjybJP52CCcxpjK1f0cCvERqBDMCQlvoO3AkSEBN65oh5KLTYa186opbcMjryI0qYqMI4QDeKKuYBCcDXxkiy4hGQCX2PJ9Cfa0XhdubdrFANhJIj38u0tFEanfqsBpL-TnFW0NyQr6cCiTYWW2Ssl~BdaF7IUjcmRgVulXKrN-4ho~B0z0XR208D2Wdo50iLH9tM07NUDsR6ArFmnj89iG05clVwYtPgNQ~oo7pjRnyenv8eOdu9ynSD8xravzQLe5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Margaret Donnelly'
    }
  },
  {
    text: 'So when your site is looked for on the search engine it will be very easy to come across as it will come up as one of the first. This will bring many more people to your web site as well as increase your Google PageRank.',
    rated: 1,
    likes: 24,
    liked: false,
    date: '09.07.2020',
    user: {
      img: 'https://s3-alpha-sig.figma.com/img/d788/205e/b900394b7ef6d2f786b811f7439ee84c?Expires=1686528000&Signature=mfvElHxWxnmKXfhtK5lsvDMTZx5Mw9XnwjEG5N8odJRDh~tfWQCm~rVRgr2WnGXhH2luTxmgZm6FHCHeTcvs7xIDgndUp3Y07WzhiPrwFPc3MYHcaf2sbG4Mz19zzVUSNNdaF38Vp9sk3u4y~YdmYsSGvYe5L~b12t~zRDKIPz-pdIJZNEJ3pZwGDxbm5nUqayteAluYFGhVHnjH8soXqhxhVp1Gupmf02Mig9pUE0fnbDHBORodYBasAZRksNmgWfKzT8fSNMxmzlnpBQ7yGu8iumtmO2cqrMCYgNuTQBJbixz-~Ro~A1gd67XSaNSsmyJhrsdu7IKOYa5TmH1d~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Wade Warren'
    }
  },
  {
    text: 'So when your site is looked for on the search engine it will be very easy to come across as it will come up as one of the first. This will bring many more people to your web site as well as increase your Google PageRank.',
    rated: 4,
    likes: 0,
    liked: false,
    date: '09.08.2020',
    user: {
      img: 'https://s3-alpha-sig.figma.com/img/2d26/9b51/df9e5228311aab8c6a38d31109d4d31b?Expires=1686528000&Signature=IRXYAtAtPMwMa3XdUutCv~cGQ9Zo~2begcLVNQU8xd1VKcs4qS6PlNnjVChLjBslxeZXQ8ahhS119ky-xAKuN~05H96QhHsZs0FxoXTqu-mQpcUYLhNCO5c3cqBUdKuT3jZQSXGvKhwJOBYKj4jpxwXsHPA6tZfjNGM2R7P8IB5xhoNUJdc3XIyBkrgPvkLWCrtlT7AFYzbcaHBE2GWGbYD0PANkvxLm0bWyvdox3LBI9bq4ZhcrgdcFR6aqBPquwSEQyE3w~nlSaV-2MuiiFWy30VgVTioJ7Gxsp2bRLZCmQjq07x-Ch0vqOj96rxRJV91fNkOzqMu44MZ58ccHLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Bessie Cooper'
    }
  },
  {
    text: 'So when your site is looked for on the search engine it will be very easy to come across as it will come up as one of the first. This will bring many more people to your web site as well as increase your Google PageRank.',
    rated: 5,
    likes: 0,
    liked: false,
    date: '09.03.2021',
    user: {
      img: 'https://s3-alpha-sig.figma.com/img/4eab/7628/4b23f3e9dc5a3dfd5d3ad30fe30893f7?Expires=1686528000&Signature=Gj0qvkkBpZbhgWl9PlveG1IvX7MeIF14vMknvY8TWdMNxQ17ZthX2XoJt4RD78z~Y9RIENFdvkdeKmDYGnrw0vHJkQVjm9OHT5lJHjXBTvRGb54Hq5m6PKN4yt11W7CC0gI-EqWC9IEPwNoldTN-a1QB~MhDPILwlw9eQyeN6er7BWnqKI4S5kCi6D~r4wOZ9ScqGRfBRW7~uSBexYpz0G~dwPSjsDe~0UFJLCCq4TYOEtXgKP9CmvOydE8go5KJHSCJNV5z9UqfevsNsa7~ojzRGgQnVH-EK0G7dwAUNtEsMwBwTbmxpCjP0l9i1Kwf0ElivXgPXjmzD2TpTcOPpw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Robert Fox'
    }
  },
  {
    text: 'So when your site is looked for on the search engine it will be very easy to come across as it will come up as one of the first. This will bring many more people to your web site as well as increase your Google PageRank.',
    rated: 3,
    likes: 0,
    liked: false,
    date: '09.05.2021',
    user: {
      img: 'https://s3-alpha-sig.figma.com/img/b804/50b4/b9513862fb0927a119a8be2627d91e64?Expires=1686528000&Signature=VH5Q21aJQF7o8wB2hTIg3Wp6ns86MdX5b9b0tRfnxeezu5rYqwUc0npKqEoYzVpJbZ65zE48d6A1lkOdDSMh2j9sDNxeNjDDzr-P81pB430I8RIAnHozNzpjl-zuJe8NOjC4qUeZvHyOJsqvj-~NBX3cIwSPLCFbOPZvu42uLF7nN02hMgxSESeEBPqyVq0lsdM7BBZAyoviimp9-UCAKVLkfr1mGJxZKmu4kQ2gWBWPJHNG7hF0S7NoQWDzl5kBOUHPPCCpe0~CmQYP0gnMWyoCskqHZpuzLwB1iHi17oB1YdxqIpGuM~u-EF5TQNT4MT49S2xxBWKaVgnXrBanCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Darrell Steward'
    }
  },
]




