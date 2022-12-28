import terminal from "../../images/windows_xp_icons/cmd-icon.jpg";
import github from "../../images/desktop/about_me/github_logo.png";
import js_folder from "../../images/desktop/js_projects/js_folder.png";
import photo_folder from "../../images/windows_xp_icons/photo_folder_logo.png"
import photo_viewer from "../../images/windows_xp_icons/photo_viewer.ico";
import palindrome_checker_readme from "./cmd_body_text/5_JS_Projects/palindrome_checker_readme";
import palindrome_checker_screenshot_1 from "../../images/desktop/js_projects/palindrome_checker/palindrome-checker-1.png";
import palindrome_checker_screenshot_2 from "../../images/desktop/js_projects/palindrome_checker/palindrome-checker-2.png";
import palindrome_checker_screenshot_3 from "../../images/desktop/js_projects/palindrome_checker/palindrome-checker-3.png";
import palindrome_checker_screenshot_4 from "../../images/desktop/js_projects/palindrome_checker/palindrome-checker-4.png";
import palindrome_checker_screenshot_5 from "../../images/desktop/js_projects/palindrome_checker/palindrome-checker-5.png";
import palindrome_checker_screenshot_6 from "../../images/desktop/js_projects/palindrome_checker/palindrome-checker-6.png";
import palindrome_checker_screenshot_7 from "../../images/desktop/js_projects/palindrome_checker/palindrome-checker-7.png";
import palindrome_checker_screenshot_8 from "../../images/desktop/js_projects/palindrome_checker/palindrome-checker-8.png";
import palindrome_checker_screenshot_9 from "../../images/desktop/js_projects/palindrome_checker/palindrome-checker-9.png";
import palindrome_checker_screenshot_10 from "../../images/desktop/js_projects/palindrome_checker/palindrome-checker-10.png";
import palindrome_checker_screenshot_11 from "../../images/desktop/js_projects/palindrome_checker/palindrome-checker-11.png";
import palindrome_checker_screenshot_12 from "../../images/desktop/js_projects/palindrome_checker/palindrome-checker-12.png";
import roman_numeral_converter_readme from "./cmd_body_text/5_JS_Projects/roman_numeral_converter_readme";
import roman_numeral_converter_screenshot_1 from "../../images/desktop/js_projects/roman_numeral_converter/roman-numeral-converter-1.png";
import roman_numeral_converter_screenshot_2 from "../../images/desktop/js_projects/roman_numeral_converter/roman-numeral-converter-2.png";
import roman_numeral_converter_screenshot_3 from "../../images/desktop/js_projects/roman_numeral_converter/roman-numeral-converter-3.png";
import roman_numeral_converter_screenshot_4 from "../../images/desktop/js_projects/roman_numeral_converter/roman-numeral-converter-4.png";
import roman_numeral_converter_screenshot_5 from "../../images/desktop/js_projects/roman_numeral_converter/roman-numeral-converter-5.png";
import roman_numeral_converter_screenshot_6 from "../../images/desktop/js_projects/roman_numeral_converter/roman-numeral-converter-6.png";
import roman_numeral_converter_screenshot_7 from "../../images/desktop/js_projects/roman_numeral_converter/roman-numeral-converter-7.png";
import roman_numeral_converter_screenshot_8 from "../../images/desktop/js_projects/roman_numeral_converter/roman-numeral-converter-8.png";
import roman_numeral_converter_screenshot_9 from "../../images/desktop/js_projects/roman_numeral_converter/roman-numeral-converter-9.png";
import roman_numeral_converter_screenshot_10 from "../../images/desktop/js_projects/roman_numeral_converter/roman-numeral-converter-10.png";
import caesars_cipher_readme from "./cmd_body_text/5_JS_Projects/caesars_cipher_readme";
import caesars_cipher_screenshot_1 from "../../images/desktop/js_projects/caesars_cipher/caesars-cipher-1.png";
import caesars_cipher_screenshot_2 from "../../images/desktop/js_projects/caesars_cipher/caesars-cipher-2.png";
import caesars_cipher_screenshot_3 from "../../images/desktop/js_projects/caesars_cipher/caesars-cipher-3.png";
import caesars_cipher_screenshot_4 from "../../images/desktop/js_projects/caesars_cipher/caesars-cipher-4.png";
import telephone_number_validator_readme from "./cmd_body_text/5_JS_Projects/telephone_number_validator_readme";
import telephone_number_validator_screenshot_1 from "../../images/desktop/js_projects/telephone_number_validator/telephone-number-validator-1.png";
import telephone_number_validator_screenshot_2 from "../../images/desktop/js_projects/telephone_number_validator/telephone-number-validator-2.png";
import telephone_number_validator_screenshot_3 from "../../images/desktop/js_projects/telephone_number_validator/telephone-number-validator-3.png";
import telephone_number_validator_screenshot_4 from "../../images/desktop/js_projects/telephone_number_validator/telephone-number-validator-4.png";
import telephone_number_validator_screenshot_5 from "../../images/desktop/js_projects/telephone_number_validator/telephone-number-validator-5.png";
import cash_register_readme from "./cmd_body_text/5_JS_Projects/cash_register_readme";
import cash_register_screenshot_1 from "../../images/desktop/js_projects/cash_register/cash-register-1.png";
import cash_register_screenshot_2 from "../../images/desktop/js_projects/cash_register/cash-register-2.png";
import cash_register_screenshot_3 from "../../images/desktop/js_projects/cash_register/cash-register-3.png";
import cash_register_screenshot_4 from "../../images/desktop/js_projects/cash_register/cash-register-4.png";


let JS_Projects_Folder = {
    //js projects folders
    "new-tab-js-projects": {
        icon: js_folder,
        title: "JS projects",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: js_folder,
                    title: "FCC: Palindrome Checker",
                    id: "dev-project-palindrome-checker"
                },
                {
                    icon: js_folder,
                    title: "FCC: Roman Numeral Converter",
                    id: "dev-project-roman-numeral-converter"
                },
                {
                    icon: js_folder,
                    title: "FCC: Caesars Cipher",
                    id: "dev-project-caesars-cipher"
                },
                {
                    icon: js_folder,
                    title: "FCC: Telephone Number Validator",
                    id: "dev-project-telephone-number-validator"
                },
                {
                    icon: js_folder,
                    title: "FCC: Cash Register",
                    id: "dev-project-cash-register"
                }
            ]
        }
    },


    //Palindrome Checker folder
    "dev-project-palindrome-checker": {
        icon: js_folder,
        title: "FCC: Palindrome Checker",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: terminal,
                    title: "readme",
                    id: "new-tab-dev-project-palindrome-checker-readme"
                },
                {
                    icon: photo_folder,
                    title: "Project screenshots",
                    id: "dev-project-palindrome-checker-screenshots"
                },
                {
                    icon: github,
                    title: "Source code",
                    id: "external-link-dev-project-palindrome-checker-source-code"
                }
            ]
        }
    },
    //Palindrome Checker readme
    "new-tab-dev-project-palindrome-checker-readme": {
        icon: terminal,
        title: "readme",
        type: "terminal",
        content: palindrome_checker_readme
    },
    //Palindrome Checker screenshots folder
    "dev-project-palindrome-checker-screenshots": {
        icon: photo_folder,
        title: "Project screenshots",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: palindrome_checker_screenshot_1,
                    title: "Project screenshot 1",
                    id: "new-photo-tab-dev-project-palindrome-checker-screenshot-0"
                },
                {
                    icon: palindrome_checker_screenshot_2,
                    title: "Project screenshot 2",
                    id: "new-photo-tab-dev-project-palindrome-checker-screenshot-1"
                },
                {
                    icon: palindrome_checker_screenshot_3,
                    title: "Project screenshot 3",
                    id: "new-photo-tab-dev-project-palindrome-checker-screenshot-2"
                },
                {
                    icon: palindrome_checker_screenshot_4,
                    title: "Project screenshot 4",
                    id: "new-photo-tab-dev-project-palindrome-checker-screenshot-3"
                },
                {
                    icon: palindrome_checker_screenshot_5,
                    title: "Project screenshot 5",
                    id: "new-photo-tab-dev-project-palindrome-checker-screenshot-4"
                },
                {
                    icon: palindrome_checker_screenshot_6,
                    title: "Project screenshot 6",
                    id: "new-photo-tab-dev-project-palindrome-checker-screenshot-5"
                },
                {
                    icon: palindrome_checker_screenshot_7,
                    title: "Project screenshot 7",
                    id: "new-photo-tab-dev-project-palindrome-checker-screenshot-6"
                },
                {
                    icon: palindrome_checker_screenshot_8,
                    title: "Project screenshot 8",
                    id: "new-photo-tab-dev-project-palindrome-checker-screenshot-7"
                },
                {
                    icon: palindrome_checker_screenshot_9,
                    title: "Project screenshot 9",
                    id: "new-photo-tab-dev-project-palindrome-checker-screenshot-8"
                },
                {
                    icon: palindrome_checker_screenshot_10,
                    title: "Project screenshot 10",
                    id: "new-photo-tab-dev-project-palindrome-checker-screenshot-9"
                },
                {
                    icon: palindrome_checker_screenshot_11,
                    title: "Project screenshot 11",
                    id: "new-photo-tab-dev-project-palindrome-checker-screenshot-10"
                },
                {
                    icon: palindrome_checker_screenshot_12,
                    title: "Project screenshot 12",
                    id: "new-photo-tab-dev-project-palindrome-checker-screenshot-11"
                }
            ]
        }
    },
    //Palindrome Checker screenshots
    "new-photo-tab-dev-project-palindrome-checker-screenshot": [{
        icon: photo_viewer,
        title: "Project Screenshot 1",
        type: "photo",
        content: palindrome_checker_screenshot_1
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 2",
        type: "photo",
        content: palindrome_checker_screenshot_2
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 3",
        type: "photo",
        content: palindrome_checker_screenshot_3
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 4",
        type: "photo",
        content: palindrome_checker_screenshot_4
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 5",
        type: "photo",
        content: palindrome_checker_screenshot_5
    }, {
        icon: photo_viewer,
        title: "Project Screenshot 6",
        type: "photo",
        content: palindrome_checker_screenshot_6
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 7",
        type: "photo",
        content: palindrome_checker_screenshot_7
    }, {
        icon: photo_viewer,
        title: "Project Screenshot 8",
        type: "photo",
        content: palindrome_checker_screenshot_8
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 9",
        type: "photo",
        content: palindrome_checker_screenshot_9
    }, {
        icon: photo_viewer,
        title: "Project Screenshot 10",
        type: "photo",
        content: palindrome_checker_screenshot_10
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 11",
        type: "photo",
        content: palindrome_checker_screenshot_11
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 12",
        type: "photo",
        content: palindrome_checker_screenshot_12
    }],
    //Palindrome Checker source code
    "external-link-dev-project-palindrome-checker-source-code": "https://github.com/kamal98ETH/FCC-Palindrome-Checker",


    //Roman Numeral Converter folder
    "dev-project-roman-numeral-converter": {
        icon: js_folder,
        title: "FCC: Roman Numeral Converter",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: terminal,
                    title: "readme",
                    id: "new-tab-dev-project-roman-numeral-converter-readme"
                },
                {
                    icon: photo_folder,
                    title: "Project screenshots",
                    id: "dev-project-roman-numeral-converter-screenshots"
                },
                {
                    icon: github,
                    title: "Source code",
                    id: "external-link-dev-project-roman-numeral-converter-source-code"
                }
            ]
        }
    },
    //Roman Numeral Converter readme
    "new-tab-dev-project-roman-numeral-converter-readme": {
        icon: terminal,
        title: "readme",
        type: "terminal",
        content: roman_numeral_converter_readme
    },
    //Roman Numeral Converter screenshots folder
    "dev-project-roman-numeral-converter-screenshots": {
        icon: photo_folder,
        title: "Project screenshots",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: roman_numeral_converter_screenshot_1,
                    title: "Project screenshot 1",
                    id: "new-photo-tab-dev-project-roman-numeral-converter-screenshot-0"
                },
                {
                    icon: roman_numeral_converter_screenshot_2,
                    title: "Project screenshot 2",
                    id: "new-photo-tab-dev-project-roman-numeral-converter-screenshot-1"
                },
                {
                    icon: roman_numeral_converter_screenshot_3,
                    title: "Project screenshot 3",
                    id: "new-photo-tab-dev-project-roman-numeral-converter-screenshot-2"
                },
                {
                    icon: roman_numeral_converter_screenshot_4,
                    title: "Project screenshot 4",
                    id: "new-photo-tab-dev-project-roman-numeral-converter-screenshot-3"
                },
                {
                    icon: roman_numeral_converter_screenshot_5,
                    title: "Project screenshot 5",
                    id: "new-photo-tab-dev-project-roman-numeral-converter-screenshot-4"
                },
                {
                    icon: roman_numeral_converter_screenshot_6,
                    title: "Project screenshot 6",
                    id: "new-photo-tab-dev-project-roman-numeral-converter-screenshot-5"
                },
                {
                    icon: roman_numeral_converter_screenshot_7,
                    title: "Project screenshot 7",
                    id: "new-photo-tab-dev-project-roman-numeral-converter-screenshot-6"
                },
                {
                    icon: roman_numeral_converter_screenshot_8,
                    title: "Project screenshot 8",
                    id: "new-photo-tab-dev-project-roman-numeral-converter-screenshot-7"
                },
                {
                    icon: roman_numeral_converter_screenshot_9,
                    title: "Project screenshot 9",
                    id: "new-photo-tab-dev-project-roman-numeral-converter-screenshot-8"
                },
                {
                    icon: roman_numeral_converter_screenshot_10,
                    title: "Project screenshot 10",
                    id: "new-photo-tab-dev-project-roman-numeral-converter-screenshot-9"
                }
            ]
        }
    },
    //Roman Numeral Converter screenshots
    "new-photo-tab-dev-project-roman-numeral-converter-screenshot": [{
        icon: photo_viewer,
        title: "Project Screenshot 1",
        type: "photo",
        content: roman_numeral_converter_screenshot_1
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 2",
        type: "photo",
        content: roman_numeral_converter_screenshot_2
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 3",
        type: "photo",
        content: roman_numeral_converter_screenshot_3
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 4",
        type: "photo",
        content: roman_numeral_converter_screenshot_4
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 5",
        type: "photo",
        content: roman_numeral_converter_screenshot_5
    }, {
        icon: photo_viewer,
        title: "Project Screenshot 6",
        type: "photo",
        content: roman_numeral_converter_screenshot_6
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 7",
        type: "photo",
        content: roman_numeral_converter_screenshot_7
    }, {
        icon: photo_viewer,
        title: "Project Screenshot 8",
        type: "photo",
        content: roman_numeral_converter_screenshot_8
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 9",
        type: "photo",
        content: roman_numeral_converter_screenshot_9
    }, {
        icon: photo_viewer,
        title: "Project Screenshot 10",
        type: "photo",
        content: roman_numeral_converter_screenshot_10
    }],
    //Roman Numeral Converter source code
    "external-link-dev-project-roman-numeral-converter-source-code": "https://github.com/kamal98ETH/FCC-Roman-Numeral-Converter",


    //Caesars Cipher folder
    "dev-project-caesars-cipher": {
        icon: js_folder,
        title: "FCC: Caesars Cipher",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: terminal,
                    title: "readme",
                    id: "new-tab-dev-project-caesars-cipher-readme"
                },
                {
                    icon: photo_folder,
                    title: "Project screenshots",
                    id: "dev-project-caesars-cipher-screenshots"
                },
                {
                    icon: github,
                    title: "Source code",
                    id: "external-link-dev-project-caesars-cipher-source-code"
                }
            ]
        }
    },
    //Caesars Cipher readme
    "new-tab-dev-project-caesars-cipher-readme": {
        icon: terminal,
        title: "readme",
        type: "terminal",
        content: caesars_cipher_readme
    },
    //Caesars Cipher screenshots folder
    "dev-project-caesars-cipher-screenshots": {
        icon: photo_folder,
        title: "Project screenshots",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: caesars_cipher_screenshot_1,
                    title: "Project screenshot 1",
                    id: "new-photo-tab-dev-project-caesars-cipher-screenshot-0"
                },
                {
                    icon: caesars_cipher_screenshot_2,
                    title: "Project screenshot 2",
                    id: "new-photo-tab-dev-project-caesars-cipher-screenshot-1"
                },
                {
                    icon: caesars_cipher_screenshot_3,
                    title: "Project screenshot 3",
                    id: "new-photo-tab-dev-project-caesars-cipher-screenshot-2"
                },
                {
                    icon: caesars_cipher_screenshot_4,
                    title: "Project screenshot 4",
                    id: "new-photo-tab-dev-project-caesars-cipher-screenshot-3"
                }
            ]
        }
    },
    //Caesars Cipher screenshots
    "new-photo-tab-dev-project-caesars-cipher-screenshot": [{
        icon: photo_viewer,
        title: "Project Screenshot 1",
        type: "photo",
        content: caesars_cipher_screenshot_1
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 2",
        type: "photo",
        content: caesars_cipher_screenshot_2
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 3",
        type: "photo",
        content: caesars_cipher_screenshot_3
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 4",
        type: "photo",
        content: caesars_cipher_screenshot_4
    }],
    //Caesars Cipher source code
    "external-link-dev-project-caesars-cipher-source-code": "https://github.com/kamal98ETH/FCC-Caesars-Cipher",


    //Telephone Number Validator folder
    "dev-project-telephone-number-validator": {
        icon: js_folder,
        title: "FCC: Telephone Number Validator",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: terminal,
                    title: "readme",
                    id: "new-tab-dev-project-telephone-number-validator-readme"
                },
                {
                    icon: photo_folder,
                    title: "Project screenshots",
                    id: "dev-project-telephone-number-validator-screenshots"
                },
                {
                    icon: github,
                    title: "Source code",
                    id: "external-link-dev-project-telephone-number-validator-source-code"
                }
            ]
        }
    },
    //Telephone Number Validator readme
    "new-tab-dev-project-telephone-number-validator-readme": {
        icon: terminal,
        title: "readme",
        type: "terminal",
        content: telephone_number_validator_readme
    },
    //Telephone Number Validator screenshots folder
    "dev-project-telephone-number-validator-screenshots": {
        icon: photo_folder,
        title: "Project screenshots",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: telephone_number_validator_screenshot_1,
                    title: "Project screenshot 1",
                    id: "new-photo-tab-dev-project-telephone-number-validator-screenshot-0"
                },
                {
                    icon: telephone_number_validator_screenshot_2,
                    title: "Project screenshot 2",
                    id: "new-photo-tab-dev-project-telephone-number-validator-screenshot-1"
                },
                {
                    icon: telephone_number_validator_screenshot_3,
                    title: "Project screenshot 3",
                    id: "new-photo-tab-dev-project-telephone-number-validator-screenshot-2"
                },
                {
                    icon: telephone_number_validator_screenshot_4,
                    title: "Project screenshot 4",
                    id: "new-photo-tab-dev-project-telephone-number-validator-screenshot-3"
                },
                {
                    icon: telephone_number_validator_screenshot_5,
                    title: "Project screenshot 5",
                    id: "new-photo-tab-dev-project-telephone-number-validator-screenshot-4"
                }
            ]
        }
    },
    //Telephone Number Validator screenshots
    "new-photo-tab-dev-project-telephone-number-validator-screenshot": [{
        icon: photo_viewer,
        title: "Project Screenshot 1",
        type: "photo",
        content: telephone_number_validator_screenshot_1
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 2",
        type: "photo",
        content: telephone_number_validator_screenshot_2
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 3",
        type: "photo",
        content: telephone_number_validator_screenshot_3
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 4",
        type: "photo",
        content: telephone_number_validator_screenshot_4
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 5",
        type: "photo",
        content: telephone_number_validator_screenshot_5
    }],
    //Telephone Number Validator source code
    "external-link-dev-project-telephone-number-validator-source-code": "https://github.com/kamal98ETH/FCC-Telephone-Number-Validator",


    //Cash Register folder
    "dev-project-cash-register": {
        icon: js_folder,
        title: "FCC: Cash Register",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: terminal,
                    title: "readme",
                    id: "new-tab-dev-project-cash-register-readme"
                },
                {
                    icon: photo_folder,
                    title: "Project screenshots",
                    id: "dev-project-cash-register-screenshots"
                },
                {
                    icon: github,
                    title: "Source code",
                    id: "external-link-dev-project-cash-register-source-code"
                }
            ]
        }
    },
    //Cash Register readme
    "new-tab-dev-project-cash-register-readme": {
        icon: terminal,
        title: "readme",
        type: "terminal",
        content: cash_register_readme
    },
    //Cash Register screenshots folder
    "dev-project-cash-register-screenshots": {
        icon: photo_folder,
        title: "Project screenshots",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: cash_register_screenshot_1,
                    title: "Project screenshot 1",
                    id: "new-photo-tab-dev-project-cash-register-screenshot-0"
                },
                {
                    icon: cash_register_screenshot_2,
                    title: "Project screenshot 2",
                    id: "new-photo-tab-dev-project-cash-register-screenshot-1"
                },
                {
                    icon: cash_register_screenshot_3,
                    title: "Project screenshot 3",
                    id: "new-photo-tab-dev-project-cash-register-screenshot-2"
                },
                {
                    icon: cash_register_screenshot_4,
                    title: "Project screenshot 4",
                    id: "new-photo-tab-dev-project-cash-register-screenshot-3"
                }
            ]
        }
    },
    //Cash Register screenshots
    "new-photo-tab-dev-project-cash-register-screenshot": [{
        icon: photo_viewer,
        title: "Project Screenshot 1",
        type: "photo",
        content: cash_register_screenshot_1
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 2",
        type: "photo",
        content: cash_register_screenshot_2
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 3",
        type: "photo",
        content: cash_register_screenshot_3
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 4",
        type: "photo",
        content: cash_register_screenshot_4
    }],
    //Cash Register source code
    "external-link-dev-project-cash-register-source-code": "https://github.com/kamal98ETH/FCC-Cash-Register"

}
export default JS_Projects_Folder;