# Newsletter signup form

## Notes

### Custom list image and vertical centering
Styling lists with custom image. I was having issues with centering the list item text vertically with the list icon. 
```css
ul li {
    list-style-type: none;
    background-image: url("@/assets/images/icon-list.svg");
    background-repeat: no-repeat;
    background-position: left center;
    line-height: 30px;
    padding-left: 40px;
}
```

### Forms Forms Forms
- Typescript needs `React.ChangeEvent<HTMLInputElement>`
- Keep form data inputs as part of state
- On submit, submit the whole form data state