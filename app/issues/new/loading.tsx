import { Skeleton } from '@/app/componets';
import { Box } from '@radix-ui/themes';


const LoadingIssuePage = () => {
  return (
   
<Box className= 'max-w-xl'>
  <Skeleton />
  <Skeleton height="20rem" />
</Box>
  )
}

export default LoadingIssuePage