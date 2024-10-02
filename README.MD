# Offset Parent
Closest non-static element. Anchor for all non-static children.
`position: static | relative | absolute | fixed | sticky`;
## Absolute
Positions relative to offset parent. Excluded from flow.
## Relative
Offset parent for itslef. Not excluded from flow
## Fixed
Offset parent is window. Excluded from flow
## Sticky 
Offset parent is window, excluded from flow. Can not go out of its parent.


# Selectors

id | # - select by id
class . - select by class
[attr] - select by attr
[attr="value"] - select by attr value

space means <b>inside</b>
no space means <b>and</b>
, means <b>or</b>

`.el-1 .el-2` means el-2 inside el-1
`.el-1.el-2` means el-2 and el-1

#nesting and neighbourhood
space - means inside
 more ()   = 

selector syntax can be combined
`[rel] .el-1` means element with class el-1 inside element with attribute rel
`[rel] [class="el-1"]` means elements with class attribute value "el-1" inside elements with rel
`div[rel] .el-1` means all elements with class el-1 inside divs with attribute rel
`#item div.el-1[rel]` means all elements with attribute rel and class el-1 which are divs inside element with id item
`div[rel] .el-1, #item [rel].class-2` 

# Pseudo selectors

`:hover` - elements which are hovered by mouse
`:focus` - elements in focus
`:first-child` - first element inside it's parent
`:last-child` - last element inside it's parent
`:nth-child(2)` - second element inside it's parent
`:nth-child(3n)` - second element that devides by Xn inside it's parent
`:nth-child(odd)` - odd elements
`:nth-child(even)` - even elements

`.el-1 :hover` 

+ next el after