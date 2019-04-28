import flyJson from '@/utils/flyJson'
import fly from '@/utils/fly'

//application/json
export const getUserById = json => flyJson.post('spotCheck/sysUserEntity/getUserById', json)
//application/x-www-form-urlencoded
export const formPostTest = userId => fly.post('spotCheck/sysUserEntity/formPostTest', userId)