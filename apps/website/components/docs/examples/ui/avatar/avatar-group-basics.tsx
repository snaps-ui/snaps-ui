import { Avatar, AvatarGroup } from '@snaps-ui/react/avatar'

export const imgUrl = [
  {
    id: 1,
    img: 'http://bit.ly/43kBcJt',
  },
  {
    id: 2,
    img: 'http://bit.ly/47jPX1D',
  },
  {
    id: 3,
    img: 'https://rb.gy/39f8mx',
  },
]

export const AvatarGroupBasics = () => {
  return (
    <AvatarGroup gap="0" spaceX="-2">
      {imgUrl.map((data) => (
        <Avatar.Root size={'lg'} key={data.id}>
          <Avatar.Fallback />
          <Avatar.Image src={data.img} />
        </Avatar.Root>
      ))}
    </AvatarGroup>
  )
}
