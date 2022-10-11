import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blogs'>
            <h2>Blog</h2>
            <div className='blog'>
                <h4>What is the purpose of react router?</h4>
                <p>React Router, and dynamic, client-side routing, allows us to build a single-page web
                    application with navigation without the page refreshing as the user navigates. React
                    Router uses component structure to call components, which display the appropriate
                    information.By preventing a page refresh, and using Router or Link, which is explained
                    in more depth below, the flash of a white screen or blank page is prevented. This is
                    one increasingly common way of having a more seamless user experience. React router
                    also allows the user to utilize browser functionality like the back button and the
                    refresh page while maintaining the correct view of the application.</p>
            </div>
            <div className='blog'>
                <h4>How does context api work?</h4>
                <p>The React Context API is a way for a React app to effectively produce global variables
                    that can be passed around. This is the alternative to "prop drilling" or moving props
                    from grandparent to child to parent, and so on. Context is also touted as an easier,
                    lighter approach to state management using Redux.React.createContext() is all you need.
                    It returns a consumer and a provider. Provider is a component that as it's names suggests
                    provides the state to its children. It will hold the "store" and be the parent of all
                    the components that might need that store. Consumer as it so happens is a component that
                    consumes and uses the state. </p>
            </div>
            <div className='blog'>
                <h4>What do you know about useRef hook?</h4>
                <p>The useRef Hook allows you to persist values between renders. It can be used to store a
                    mutable value that does not cause a re-render when updated.It can be used to access a DOM
                    element directly.The useRef returns a mutable ref object. This object has a property called
                    .current. The value is persisted in the refContainer.current property. These values are
                    accessed from the current property of the returned object. The .current property could be
                    initialised to the passed argument initialValue e.g. useRef(initialValue). The object can
                    persist a value for a full lifetime of the component. </p>
            </div>
        </div>
    );
};

export default Blog;