"use client"

import React from 'react'
import { Input } from './ui/input'
import { ArrowRight, ArrowRightIcon, MailCheck, MessageCircleDashedIcon, UserCheck } from 'lucide-react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const Form = () => {
  return (
    <form className='flex flex-col gap-y-4'>
    {/* FIRST */}
    <div className='relative flex items-center'>
        <Input type="text" placeholder="First Name" id="firstname" name="firstname" required/>
        <UserCheck className='absolute right-6' />
    </div>
    {/* LAST */}
    <div className='relative flex items-center'>
        <Input type="text" placeholder="Last Name" id="lastname" name="lastname" required/>
        <UserCheck className='absolute right-6' />
    </div>

    {/* EMAIL */}
    <div className='relative flex items-center'>
        <Input type="email" placeholder="Email" id="email" name="email" required/>
        <MailCheck className='absolute right-6' />
    </div>

    {/* TEXT AREA */}
    <div className='relative flex items-center'>
        <Textarea placeholder='Message' id='message' name='message' required/>
        <MessageCircleDashedIcon className='absolute right-6 top-4' />
    </div>

    <Button className="flex items-center gap-x-1 max-w-[165px]">
        Lets Talk <ArrowRightIcon size={20} />
    </Button>
    </form>
  )
}

export default Form
