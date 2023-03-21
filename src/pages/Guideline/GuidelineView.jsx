import React from 'react'
import Control from '../../common/Control/Control'
import { BsEmojiFrown, BsEmojiExpressionless, BsEmojiSmile, BsEmojiAngry } from 'react-icons/bs'

const GuidelineView = () => {
  return (
    <div className='min-h-screen md:p-16 m-5'>
        <div className='flex justify-end my-4'>
            <span className="font-medium text-xl text-gray-900 dark:text-gray-300 mr-4">Switch to Buyer</span>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer"/>
                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        </div>
        <Control title='Guidelines strikes'/>
        <div className='md:flex flex-col my-5'>
            <p className='text-[#00538F] text-xl my-3 font-medium'>Community guideline status: 40%</p>
            <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700">
                <div className="bg-[#D57635] h-2.5 w-4/12"></div>
            </div>
        </div>
        <div className='flex justify-around my-16'>
            <BsEmojiAngry size={'4em'} className='cursor-pointer' />
            <BsEmojiFrown size={'4em'} className='cursor-pointer' />
            <BsEmojiExpressionless size={'4em'} className='cursor-pointer' />
            <BsEmojiSmile size={'4em'} className='cursor-pointer' />
        </div>
        <p className='text-gray-500 text-xl my-3 font-medium'>Your Community guidelines violations are listed below. <span className='text-[#00538F] cursor-pointer'>See more</span></p>
        <article className='font-medium text-lg mt-10'>
        <h3 className='my-4 text-2xl text-[#00538F] font-medium'>What happens when you get a strike</h3>
        <div>
            When you get a strike, you're told via email. You can also choose to have notifications sent to you through your mobile and computer notifications, and in your channel settings. We’ll also tell you:
        <ol className='list-disc list-inside my-3'>
            <li>What workplace was removed</li>
            <li>Which policies it violated (for example harassment or violence)</li>
            <li>How it affects your workplace</li>
            <li>What you can do next</li>
        </ol>            
            If your workplace violates our Community Guidelines, here’s how it affects your profile:
        </div>
        <h3 className='my-4 text-2xl text-[#00538F] font-medium'>
            Warning 
        </h3>
        <p>
            We understand mistakes happen and you don’t mean to violate our policies — that’s why the first violation is typically only a warning. You only get one warning, and this warning remains on your profile. The next time your workplace is found to violate the Community Guidelines, you'll get a strike. Sometimes a single case of severe abuse will result in workplace termination without warning. If you think we made a mistake, you can appeal the warning.
        </p>

        <h4 className='my-4 text-xl text-[#00538F] font-medium'>First Strike</h4>
        <p>
            If we find your workplace doesn’t follow our policies for a second time, you'll get a strike.
            This strike means you will not be allowed to do the following for 1 week:

            Your scheduled public workplace is set to “private” for the penalty period duration. You have to reschedule it when the freeze period ends.
            After the 1-week period, we restore full privileges automatically, but the strike remains on your workplace for 90 days.
        </p>
        <h4 className='my-4 text-xl text-[#00538F] font-medium'>
        Second Strike
        </h4>
        <p>
            If you get a second strike within the same 90-day period as your first strike, you will not be allowed to work for 2 weeks. If there are no further issues, after the 2-week period, we restore full privileges automatically. Each strike will not expire until 90 days from the time it was issued.
        </p>
        <h4 className='my-4 text-xl text-[#00538F] font-medium'>
            Third Strike
        </h4>
        <p>
            3 strikes in the same 90-day period results in your workplace being permanently removed from Selflance. Each strike will not expire until 90 days from the time it was issued.
        </p>
        <p className='my-3'>
            <span className='text-[#00538F]'>Note:</span> Deleting your workplace doesn't remove a strike. We may also issue a Community Guidelines strike on deleted workplace. You can learn more about when we retain deleted workplace in our Privacy policy.
            If your Official Artist workplace gets a Community Guidelines strike, the workplace will be suspended and become a standard workplace. Learn more.
        </p>
        </article>
    </div>
  )
}

export default GuidelineView