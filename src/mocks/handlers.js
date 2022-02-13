import { rest } from "msw";

export const handlers = [
  rest.get("https://www.thecocktaildb.com/api/json/v1/1/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        drinks: [
          {
            strDrink: "3-Mile Long Island Iced Tea",
            strDrinkThumb:
              "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
            idDrink: "15300",
          },
          {
            strDrink: "410 Gone",
            strDrinkThumb:
              "https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg",
            idDrink: "13581",
          },
        ],
      })
    );
  }),
];
