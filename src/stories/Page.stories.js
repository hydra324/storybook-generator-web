import Page from "./Page.js";

export default {
    component: Page,
    title: 'Page',
    tags: ['autodocs'],
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
      },
};

export const FirstPage = {
    args: {
        pageNumber: 1,
        zIndex: 1,
        navigateNext: () => {console.log('Next Page clicked!')},
        navigatePrev: () => {console.log('Previous Page clicked!')},
    },
};

export const SecondPage = {
    args: {
        pageNumber: 2,
        zIndex: 0,
        navigateNext: () => {console.log('Next Page clicked!')},
        navigatePrev: () => {console.log('Previous Page clicked!')},
    },
};