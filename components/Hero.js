import Image from 'next/image'

const Hero = ({
  header,
  content,
  buttonLink,
  buttonContent,
  src,
  height,
  width,
  alt,
  ...props
}) => (
  <>
    <div>
      <Image {...props} src={src} height={height} width={width} alt={alt} />
    </div>
  </>
)

export default Hero
