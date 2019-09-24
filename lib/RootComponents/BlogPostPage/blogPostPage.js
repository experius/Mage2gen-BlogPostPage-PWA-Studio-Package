import React, { Component, Fragment } from 'react';
// START CUSTOM CODE
import { Query } from '@magento/venia-drivers';
import LoadingIndicator from '../../../../../@magento/venia-ui/lib/components/LoadingIndicator';
import { Title } from '../../../../../@magento/venia-ui/lib/components/Head';
import mage2genPostQuery from '../../queries/getMage2genPost.graphql';
// END CUSTOM CODE

export default class BlogPostPage extends Component {
    render() {
        /* GENERATED CODE
        return 'Your rootComponent BlogPostPage with id: ' + this.props.id;
         */
        // START CUSTOM CODE
        const { id } = this.props;
        return (
            <Query
                query={mage2genPostQuery}
                variables={{
                    post_id: id
                }}
            >
                {({ loading, error, data }) => {
                    if (error) {
                        <div className={classes.fetchError}>
                            Data Fetch Error: <pre>{error.message}</pre>
                        </div>
                    }
                    if (loading) return LoadingIndicator;

                    return (
                        <Fragment>
                            <Title>{data.post.title}</Title>
                            <h3>{data.post.title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
                        </Fragment>
                    );
                }}
            </Query>
        );
        // END CUSTOM CODE
    }
}
