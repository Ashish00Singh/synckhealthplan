import { Badge } from '@/components/ui/badge'
import { IconTrendingUp } from '@tabler/icons-react';
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function Topcard() {
  return (
     <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5' >
        <Card className="cardcustom md:col-span-1">
          <CardHeader>
            <CardDescription>Total On-Boarding</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums sm:text-3xl">
              $1,250.00
            </CardTitle>
            <CardAction>
              <Badge variant="outline" className='bg-blue-400 border-black rounded-full'>
                <IconTrendingUp />
                +12.5%
              </Badge>
            </CardAction>
          </CardHeader>
        </Card>

        <Card className="cardcustom border-white md:col-span-1">
          <CardHeader>
            <CardDescription>Total Pending</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums sm:text-3xl">
              $1,250.00
            </CardTitle>
            <CardAction>
              <Badge variant="outline" className='bg-red-400 border-black rounded-full'>
                <IconTrendingUp />
                +12.5%
              </Badge>
            </CardAction>
          </CardHeader>
          
        </Card>

        <Card className="cardcustom border-white md:col-span-2 lg:col-span-1">
          <CardHeader>  
            <CardDescription>Closed</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums sm:text-3xl">
              $1,250.00
            </CardTitle>
            <CardAction>
              <Badge variant="outline" className='bg-green-400 border-black rounded-full border'>
                <IconTrendingUp />
                +12.5%
              </Badge>
            </CardAction>
          </CardHeader>
          {/* <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Trending up this month <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Visitors for the last 6 months
            </div>
          </CardFooter> */}
        </Card>
       
      </div>
  )
}
