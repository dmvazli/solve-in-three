console.log('coin.js');

/* *************************************************************************************************** */
/*                                          COIN MODEL                                                 */
/* *************************************************************************************************** */

export default class Coin
{
    constructor(id)
    {
        this.id = id;
        this.isBlocked = false;
        this.isBlocking = false;
    }
}
