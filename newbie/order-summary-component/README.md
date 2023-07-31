# Order Summary Component

[Challenge link](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj)

## Notes

- `background-image` to make the top background rather than using `img` element. Learned a CSS trick to set a height for invisible div using vertical padding percentage. The downside is that overshooting the padding percentage will cause the element under it to be pushed down. I needed to be precise with the percentage chosen so that it lines up well. Not ideal....

```css
.background {
    padding-top: 49%;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 20px 20px 0 0;
}
```