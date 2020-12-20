const races = {
    orc:{
      title:"Orc",
      faction:"Horde",
      description:"oiuhseoifhosuehfoishfuosehs it's a miracle they survived.",
      background:"https://bnetcmsus-a.akamaihd.net/cms/template_resource/XS348XNQRE4V1456972102242.jpg",
      introduced:"Original",
      displayOrder:0,
      maleIcon:"./imgs/asset-icons/orc-male.png",
      femaleIcon:"./imgs/asset-icons/orc-female.png",
      slug:"orc",
      character: "https://bnetcmsus-a.akamaihd.net/cms/template_resource/D518L5NUXZDI1456972105731.png",
      homeZone: {
        title: "Durotar",
        description: ""
      },
      raceTraits: [
        {
          img: "",
          title: "Blood Fury",
          description: ""
        },
        {
          img: "",
          title: "Hardiness",
          description: ""
        },
        {
          img: "",
          title: "Command",
          description: ""
        }
      ],

      availableClasses: [
        {
          img: "./imgs/asset-icons/warrior-icon.png",
          title: "Warrior",
          description: ":)"
        },
        {
          img: "./imgs/asset-icons/rogue-icon.png",
          title: "Rogue",
          description: ":)"
        },
        {
          img: "./imgs/asset-icons/mage-icon.png",
          title: "Mage",
          description: ":)"
        },
        {
          img: "./imgs/asset-icons/hunter-icon.png",
          title: "Hunter",
          description: ":)"
        },
        {
          img: "./imgs/asset-icons/shaman-icon.png",
          title: "Shaman",
          description: ":)"
        },
        {
          img: "./imgs/asset-icons/warlock-icon.png",
          title: "Warlock",
          description: ":)"
        },
        {
          img: "./imgs/asset-icons/deathknight-icon.png",
          title: "Death Knight",
          description: ":)" //don't have img
        },

      ],  
    },
    bloodelf: {
      title:"Blood Elf",
      faction:"Horde",
      description:"oiuhseoifhosuehfoishfuosehs",
      background: "https://bnetcmsus-a.akamaihd.net/cms/template_resource/3M9XNRV3MMLZ1456960924002.jpg",
      introduced:"The burning Crusade",
      displayOrder:4,
      maleIcon:"./imgs/asset-icons/bloodelf-male.png",
      femaleIcon:"./imgs/asset-icons/bloodelf-female.png",
      slug:"bloodelf",
      character:"https://bnetcmsus-a.akamaihd.net/cms/template_resource/GFICYWPACPF51456960925276.png"
      
    },
    undead: {
      title:"Undead",
      faction:"Horde",
      description:"oiuhseoifhosuehfoishfuosehs",
      background:"https://bnetcmsus-a.akamaihd.net/cms/template_resource/SJOGQFKB0BR61456780119894.jpg",
      introduced:"Original",
      displayOrder:2,
      maleIcon:"./imgs/asset-icons/undead-male.png",
      femaleIcon:"./imgs/asset-icons/undead-female.png",
      slug:"undead",
      character:"https://bnetcmsus-a.akamaihd.net/cms/template_resource/UXV3VPKATE0V1456780122572.png"
      
    },
    troll: {
      title:"Troll",
      faction:"Horde",
      description:"oiuhseoifhosuehfoishfuosehs",
      background:"https://bnetcmsus-a.akamaihd.net/cms/template_resource/XAEAHGX0VG841456973044116.jpg",
      introduced:"Original",
      displayOrder:1,
      maleIcon:"./imgs/asset-icons/troll-male.png",
      femaleIcon:"./imgs/asset-icons/troll-female.png",
      slug:"troll",
      character:"https://bnetcmsus-a.akamaihd.net/cms/template_resource/KFV373ZN7U2C1456973048281.png"
     
    },
    tauren: {
      title:"Tauren",
      faction:"Horde",
      description:"oiuhseoifhosuehfoishfuosehs",
      background:"https://bnetcmsus-a.akamaihd.net/cms/template_resource/kd/KD2UUG8SHMFZ1456946224258.jpg",
      introduced:"Original",
      displayOrder:3,
      maleIcon:"./imgs/asset-icons/tauren-male.png",
      femaleIcon:"./imgs/asset-icons/tauren-female.png",
      slug:"tauren",
      character:"https://bnetcmsus-a.akamaihd.net/cms/template_resource/TLX5JAQFCUGQ1456946256326.png"

    },
    human: {
      title:"Human",
      faction:"Alliance",
      description:"oiuhseoifhosuehfoishfuosehs",
      background:"https://bnetcmsus-a.akamaihd.net/cms/template_resource/RT46TWL8QIUI1456964562771.jpg",
      introduced:"Original",
      maleIcon:"./imgs/asset-icons/human-male.png",
      femaleIcon:"./imgs/asset-icons/human-female.png",
      slug:"human",
      character:"https://bnetcmsus-a.akamaihd.net/cms/template_resource/0YVVY66E1D6W1456964569905.png"  // find other image
    },
    draenei: {
      title:"Draenei",
      faction:"Alliance",
      description:"oiuhseoifhosuehfoishfuosehs",
      background: "https://bnetcmsus-a.akamaihd.net/cms/template_resource/UP20QUAQK4V81456966522227.jpg",
      introduced:"The burning Crusade",
      displayOrder:4,
      maleIcon:"./imgs/asset-icons/draenei-male.png",
      femaleIcon:"./imgs/asset-icons/draenei-female.png",
      slug:"draenei",
      character:"https://bnetcmsus-a.akamaihd.net/cms/template_resource/FN83RCLUTJ5H1456966521845.png"
    },
    nightelf: {
      title:"Night Elf",
      faction:"Alliance",
      description:"oiuhseoifhosuehfoishfuosehs",
      background:"https://bnetcmsus-a.akamaihd.net/cms/kb_media/1YIIR2X9O3II1456965513198.jpg",
      introduced:"Original",
      displayOrder:1,
      maleIcon:"./imgs/asset-icons/nightelf-male.png",
      femaleIcon:"./imgs/asset-icons/nightelf-female.png",
      slug:"nightelf",
      character: "https://bnetcmsus-a.akamaihd.net/cms/kb_media/2WBR2OJWBPD71456965523479.png",
    },
    dwarf: {
      title:"Dwarf",
      faction:"Alliance",
      description:"oiuhseoifhosuehfoishfuosehs",
      background:"https://bnetcmsus-a.akamaihd.net/cms/template_resource/NR67UQV0XNZR1456960600797.jpg",
      introduced:"Original",
      displayOrder:2,
      maleIcon:"./imgs/asset-icons/dwarf-male.png",
      femaleIcon:"./imgs/asset-icons/dwarf-female.png",
      slug:"dwarf",
      character:"https://bnetcmsus-a.akamaihd.net/cms/template_resource/QN7ZQHY132GB1456960604590.png"
    },
    gnome: {
      title:"Gnome",
      faction:"Alliance",
      description:"oiuhseoifhosuehfoishfuosehs",
      background:"https://bnetcmsus-a.akamaihd.net/cms/template_resource/LHVV7SV4H44O1456962925370.jpg",
      introduced:"Original",
      displayOrder:3,
      maleIcon:"./imgs/asset-icons/gnome-male.png",
      femaleIcon:"./imgs/asset-icons/gnome-female.png",
      slug:"gnome",
      character:"https://bnetcmsus-a.akamaihd.net/cms/template_resource/2IXQKC8GD2MU1456962930394.png"
    }
  }

