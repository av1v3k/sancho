/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Link } from "gatsby"
import { Text, theme, MenuLabel, MenuDivider, InputBase } from "../../../src"

interface ComponentListProps {}

const padding = `${theme.spaces.xs} ${theme.spaces.lg}`

function MenuLink({ to, children }) {
  return (
    <li
      css={{
        listStyle: "none",
        paddingLeft: 0,
        marginBottom: 0,
      }}
    >
      <Link
        activeStyle={{
          background: theme.colors.background.tint2,
        }}
        css={{
          display: "block",
          padding,
          textDecoration: "none",
          background: "transparent",
          outline: "none",
          ":hover": {
            background: theme.colors.background.tint2,
          },
          ":focus": {
            background: theme.colors.background.tint2,
          },
        }}
        to={to}
      >
        <Text
          css={{
            color: theme.colors.text.muted,
            fontSize: theme.sizes[0],
          }}
        >
          {children}
        </Text>
      </Link>
    </li>
  )
}

function Label({ children }) {
  return <MenuLabel css={{ padding }}>{children}</MenuLabel>
}

function ListGroup({ label, children }) {
  return (
    <div css={{ margin: `${theme.spaces.md} 0` }}>
      <Label>{label}</Label>
      <ul css={{ padding: 0, margin: 0 }}>{children}</ul>
    </div>
  )
}

const about = [
  { title: "Installation", path: "/#installation" },
  { title: "Styling and themes", path: "/#styling%20and%20themes" },
]

const components = [
  { title: "Alert", path: "/components/alert" },
  { title: "Avatar", path: "/components/avatar" },
  { title: "Badge", path: "/components/badge" },
  { title: "Breadcrumb", path: "/components/breadcrumb" },
  { title: "Button", path: "/components/button" },
  { title: "Collapse", path: "/components/collapse" },
  { title: "Container", path: "/components/container" },
  { title: "Divider", path: "/components/divider" },
  { title: "Form", path: "/components/form" },
  { title: "IconButton", path: "/components/icon-button" },
  { title: "Icon", path: "/components/icon" },
  { title: "Layer", path: "/components/layer" },
  { title: "Link", path: "/components/link" },
  { title: "Menu", path: "/components/menu" },
  { title: "Modal", path: "/components/modal" },
  { title: "Navbar", path: "/components/navbar" },
  { title: "Overlay", path: "/components/overlay" },
  { title: "Popover", path: "/components/popover" },
  { title: "Portal", path: "/components/portal" },
  { title: "Positioner", path: "/components/positions" },
  { title: "Sheet", path: "/components/sheet" },
  { title: "SkipNav", path: "/components/skipnav" },
  { title: "Spinner", path: "/components/spinner" },
  { title: "Table", path: "/components/table" },
  { title: "Tabs", path: "/components/tabs" },
  { title: "Text", path: "/components/text" },
  { title: "Toast", path: "/components/toast" },
  { title: "Toolbar", path: "/components/toolbar" },
  { title: "Tooltip", path: "/components/tooltip" },
  { title: "VisuallyHidden", path: "/components/visually-hidden" },
]

export function ComponentList(_props: ComponentListProps) {
  const [search, setSearch] = React.useState("")
  const [componentList, setComponentList] = React.useState(components)
  const [aboutList, setAboutList] = React.useState(about)

  React.useEffect(() => {
    if (!search) {
      setComponentList(components)
      setAboutList(about)
    } else {
      setComponentList(
        components.filter(
          item => item.title.toLowerCase().indexOf(search.toLowerCase()) > -1
        )
      )

      setAboutList(
        about.filter(
          item => item.title.toLowerCase().indexOf(search.toLowerCase()) > -1
        )
      )
    }
  }, [search])

  return (
    <div
      css={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        minWidth: "14rem",
        background: theme.colors.background.tint1,
      }}
    >
      <form onSubmit={e => e.preventDefault()}>
        <InputBase
          type="search"
          placeholder="Search..."
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setSearch(e.currentTarget.value)
          }
          value={search}
          css={{
            boxShadow: "none",
            borderRadius: 0,
            background: "none",
            border: `1px solid transparent`,
            borderBottom: `1px solid ${theme.colors.border.muted}`,
            padding: theme.spaces.lg,
            height: "64px",
            ":focus": {
              borderColor: theme.colors.palette.blue.light,
              boxShadow: "none",
              // background: theme.colors.background.tint2,
            },
          }}
        />
      </form>

      <div
        css={{
          flex: 1,
          overflowY: "scroll",
          "webkit-overflow-scrolling": "touch",
        }}
      >
        <ListGroup label="Getting started">
          {aboutList.map(entry => (
            <MenuLink to={entry.path} key={entry.path}>
              {entry.title}
            </MenuLink>
          ))}
        </ListGroup>
        <MenuDivider />
        <ListGroup label="Components">
          {componentList.map(entry => (
            <MenuLink key={entry.path} to={entry.path}>
              {entry.title}
            </MenuLink>
          ))}
        </ListGroup>
      </div>
    </div>
  )
}