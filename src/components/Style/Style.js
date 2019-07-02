export const Style = {
  header: {
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      padding: "0 10%",
      boxShadow: "none"
    }
  },
  muiThemes: {
    palette: {
      primary: { main: "#9c27b0" }
    }
  },
  buttonLogin: {
    background: "#9c27b0",
    borderRadius: "30px",
    border: 0,
    color: "white",
    height: 48,
    width: "30%",
    marginTop: "15px"
  },
  styleForm: {
    container: {
      margin: "30px 30%"
    },
    formControl: {
      width: "100%",
      margin: "20px 0"
    },
    chip: {
      border: "0",
      fontSize: "13px",
      marginBottom: "6px",
      marginTop: "1px",
      outline: "none",
      padding: "5px",
      backgroundColor: "#00bcd4 !important",
      color: "#fff"
    },
    button: {
      color: "#fff",
      backgroundColor: "#9c27b0",
      marginTop: "15px",
      marginBottom: "15px",
      borderRadius:"10px",
      "&:hover": {
        textDecoration: "none",
        backgroundColor: "red"
      },
      transitionDuration: "0.6s"
    }
  },
  tag: {
    chip: {
      margin: "5px"
    },
    active: {
      textDecoration: "underline",
      color: "#FFF",
      backgroundColor: "#00acc1 !important"
    }
  },
  Preview: {
    iconFavorite: {
      color: 'red'
    },
    card: {
      width: "100%",
      marginBottom: "5px",
      clear: "both"
    },
    face: {
      width: "40px",
      height: "40px",
      borderRadius: "30px",
      cursor: "pointer"
    },
    float: {
      float: "right"
    },
    mgb10: {
      marginBottom: "20px"
    },
    chip: {
      margin: "5px",
      cursor: "pointer"
    }
  },
  buttonEditor: {
    background: "#9c27b0",
    borderRadius: "30px",
    border: 0,
    color: "white",
    height: 48,
    width: "30%",
    marginTop: "15px"
  },
  articlePageStyle: {
    root: {
      padding: "30px 10%",
      boxShadow: "none",
      background: "#F6F2F0",
      borderRadius: "0px"
    },
    card: {
      background: "#F6F2F0",
      boxShadow: "none"
    },
    title: {
      color: "#F7A98F",
      padding: "15px 0",
    },
    inforUser: {
      display: "flex",
      marginBottom: "15px",
      alignItems: "center",
      flexWrap: "wrap"
    },
    infor: {
      marginLeft: "10px",
      color: "#F7A98F"
    },
    chip: {
      color: "#fff",
      backgroundColor: "#373a3c",
      margin: "15px 5px",
      height: "20px",
      cursor: "pointer"
    },
    body: {
      padding: "30px 10%"
    },
    linearProgress: {
      height: "1px",
      marginTop: "15px"
    },
    subheader: {
      color: "#F7A98F"
    }
  },
  footerArticleStyle: {
    footer: {
      padding: "0 25%"
    },
    card: {
      maxWidth: "100%",
      margin: "15px 0"
    },
    avatar: {
      cursor: 'pointer'
    },
    time: {
      color: '#000'
    },
    button: {
      color: "#fff",
      backgroundColor: "#9c27b0",
      marginTop: "15px",
      marginBottom: "15px",
      "&:hover": {
        textDecoration: "none",
        backgroundColor: "#9c27b0"
      },"&:after":{
        backgroundColor: "#fff"
      },
      transitionDuration: "0.6s"
    },
    comment:{
      padding:"10px 10%"
    }
  },
  authorStyle: {
    label: {
      paddingLeft: "8px",
      color: '#000'
    },
    roots: {
      backgroundColor: "#EFDEAA",
      margin: "10px",
      cursor: "pointer",
      "&:hover, &:active": {
        backgroundColor: "#F7A98F"
      },
      transitionDuration: "0.6s"
    },
    avatar: {
      backgroundColor: "#fff",
      color: "#F7A98F"
    }
  }
};
