import { Quote } from "../data/quote.interface";

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  constructor(){

  }
  addQuoteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
  }

  removeQuoteFromFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id; // findIndex returns the index only if the condition given
                                    //inside is true
    });
    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuotes() {
    return this.favoriteQuotes.slice(); // slice() returns a copy of the array.

   }

  isQuoteFavorite(quote: Quote) {
    return this.favoriteQuotes.find((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
  }
}
