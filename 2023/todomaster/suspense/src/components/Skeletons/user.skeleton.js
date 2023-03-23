import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

/**
 * 스켈레톤 형태의 UI를 미리 사용자에게 보여줌으로 현재 웹페이지가 멈춘 것이 아닌 데이터를 불러오고 있음을 나타내줌
 * @returns 
 */
const UserSkeleton = () => {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
  );
}
export default UserSkeleton