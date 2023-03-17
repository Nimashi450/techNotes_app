const {format} = require('date-fns')
const { request } = require('express')
const {v4: uuid} = require('uuid')
const fs = require('fs')
const path = require('path')

const longEvent = async(message, logFileName)=>{
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid}\t${message}\n`

    try{

    }
    catch(err){
        
    }
}