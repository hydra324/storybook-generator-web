import Loading from "./Loading";

export default {
    component: Loading,
    title: 'Loading',
    tags: ['audodocs']
}

export const DisabledLoading = {
    render: () => <Loading isLoading={false} />
}

export const EnabledLoading = {
    render: () => <Loading isLoading={true} />
}