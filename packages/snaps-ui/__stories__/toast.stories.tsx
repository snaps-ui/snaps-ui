// import React from 'react'

// import type { Meta, StoryObj } from '@storybook/react-vite'

// import { Box } from '../src/components/box'
// import { Button } from '../src/components/button'
// import {
//   successToast,
//   warningToast,
//   errorToast,
// } from '../src/components/toaster'

// const meta: Meta = {
//   title: 'Feedback/Toast',
//   parameters: {
//     layout: 'centered',
//   },
// }
// export default meta
// type Story = StoryObj

// export const Success: Story = {
//   render: () => (
//     <Box>
//       <Button
//         onClick={() =>
//           successToast({
//             title: 'Saved!',
//             description: 'Your changes have been saved successfully.',
//           })
//         }
//       >
//         Show Success Toast
//       </Button>
//     </Box>
//   ),
// }

// export const Warning: Story = {
//   render: () => (
//     <Box>
//       <Button
//         onClick={() =>
//           warningToast({
//             title: 'Be careful!',
//             description: 'This action could have unintended effects.',
//           })
//         }
//       >
//         Show Warning Toast
//       </Button>
//     </Box>
//   ),
// }

// export const Error: Story = {
//   render: () => (
//     <Box>
//       <Button
//         onClick={() =>
//           errorToast({
//             title: 'Error!',
//             description: 'Something went wrong. Please try again.',
//           })
//         }
//       >
//         Show Error Toast
//       </Button>
//     </Box>
//   ),
// }
