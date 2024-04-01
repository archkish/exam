import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

export default function MyGallery() {
  return (
    <Gallery>
    <Item
      original="../assets/images/p1.jpg"
      // thumbnail="https://placekitten.com/80/60?image=1"
      width="500"
      height="300"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="../assets/images/p1.jpg" />
      )}
    </Item>
    <Item
      original="../assets/images/p2.jpg"

      width="500"
      height="300"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="../assets/images/p2.jpg" />
      )}
    </Item>
    <Item
      original="../assets/images/p3.jpg"
      // thumbnail="https://placekitten.com/80/60?image=1"
      width="500"
      height="300"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="../assets/images/p3.jpg" />
      )}
    </Item>
    <Item
      original="../assets/images/p4.jpg"
      // thumbnail="https://placekitten.com/80/60?image=1"
      width="500"
      height="300"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="../assets/images/p4.jpg" />
      )}
    </Item>
    <Item
      original="../assets/images/p5.jpg"
      // thumbnail="https://placekitten.com/80/60?image=1"
      width="500"
      height="300"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="../assets/images/p5.jpg" />
      )}
    </Item>
    <Item
      original="../assets/images/p6.jpg"
      // thumbnail="https://placekitten.com/80/60?image=1"
      width="500"
      height="300"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="../assets/images/p6.jpg" />
      )}
    </Item>
    <Item
      original="../assets/images/p7.jpg"
      // thumbnail="https://placekitten.com/80/60?image=1"
      width="500"
      height="300"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="../assets/images/p7.jpg" />
      )}
    </Item>
    <Item
      original="../assets/images/p8.jpg"
      thumbnail="https://placekitten.com/80/60?image=2"
      width="500"
      height="300"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="../assets/images/p8.jpg" />
      )}
    </Item>
    <Item
      original="../assets/images/p9.jpg"
      // thumbnail="https://placekitten.com/80/60?image=1"
      width="500"
      height="300"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="../assets/images/p9.jpg" />
      )}
    </Item>
    <Item
      original="../assets/images/p10.jpg"
      // thumbnail="https://placekitten.com/80/60?image=1"
      width="500"
      height="300"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="../assets/images/p10.jpg" />
      )}
    </Item>
    <Item
      original="../assets/images/p11.jpg"
      // thumbnail="https://placekitten.com/80/60?image=1"
      width="500"
      height="300"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="../assets/images/p11.jpg" />
      )}
    </Item>
    <Item
      original="../assets/images/p12.jpg"
      // thumbnail="https://placekitten.com/80/60?image=1"
      width="500"
      height="300"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="../assets/images/p12.jpg" />
      )}
    </Item>
  </Gallery>
  )
}