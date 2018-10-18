/*
 * @Author: 孟闲闲  定义表结构  eyes_info 
 * @Date: 2018-10-18 11:09:18 
 * @Last Modified by: mxx
 * @Last Modified time: 2018-10-18 16:45:43
 */
import { Table, Column, Model } from 'sequelize-typescript'

console.log('info infoinfoinfoinfo ')

@Table({
  tableName: 'eyes_info'
})
export default class Info extends Model<Info> {
  @Column({
    primaryKey: true,
    comment: 'info id'
  })
  id: number

  @Column({
    comment: 'user id'
  })
  userId: number

  @Column({
    comment: 'birthday'
  })
  birthday: string
}

