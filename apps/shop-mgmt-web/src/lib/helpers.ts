import Briph, { TUser, user, auth, IAuth, products, TProduct, IAdmin, admin } from 'briph-sdk'

interface I extends TUser<I>, IAuth<I>, TProduct<I>, IAdmin<I> { }
export const briph = new Briph<I>({ features: [user, auth, products, admin] })
