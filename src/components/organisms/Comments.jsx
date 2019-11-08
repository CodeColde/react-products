import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../atoms/Header';
import theme from '../../constants/theme';
import Paragraph from '../atoms/Paragraph';
import Input from '../atoms/Input';
import Textarea from '../atoms/Textarea';
import Submit from '../atoms/Submit';

const Comments = ({ productId }) => {
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const allComments = JSON.parse(localStorage.getItem('comments')) || [];
    const productComments = allComments.find(comments => comments.productId === productId) || [];

    const submitComment = () => {
        if (!name || !comment) {
            setError('*Both fields are required');
        }
        else {
            setError('');
            const commentBoolean = productComments && !!productComments.comments;
            const commentId = commentBoolean ? productComments.comments.length : 0;

            const commentSubmit = {
                id: commentId,
                name,
                comment
            };
            const oldComments = commentBoolean ? productComments.comments : [];
            const newComments = [ ...oldComments, commentSubmit];
            let submission = [...allComments, { productId, comments: newComments }];
            if (commentBoolean) {
                allComments.splice(productComments, 1);
                submission = [...allComments, { productId, comments: newComments }];
            }
            localStorage.setItem('comments', JSON.stringify(submission));

            setComment('');
            setName('');
        }
    };

    const comments = productComments && productComments.comments &&
        productComments.comments.sort((curr, prev) => curr.id < prev.id ? 1 : -1);

    return (
        <>
            <Header variant="Big">Comments</Header>
            <InputWrapper>
                {error && <Paragraph variant="Error">{error}</Paragraph>}
                <Input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Display name"
                    onChange={(e) => setName(e.target.value)}
                />
                <Textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Comment..."
                />
                <Submit onClick={submitComment}>Post Comment</Submit>
            </InputWrapper>
            <CommentsList>
                {comments ?
                    comments.map((comment) => (
                        <CommentWrapper key={comment.id}>
                            <Name variant="Medium">{comment.name}</Name>
                            <Paragraph variant="Marginless">{comment.comment}</Paragraph>
                        </CommentWrapper>
                    )) : <Paragraph variant="Italics">No comments for this product yet!</Paragraph>
                }
            </CommentsList>
        </>
    );
};

export default Comments;

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Name = styled(Header)`
    margin: 0.2rem 0;
    font-weight: 500;
`;

const CommentsList = styled.div`
    width: 75%;

    @media screen and (max-width: ${theme.mediaQueries.width.s}) {
        width: 100%;
    }
`;

const CommentWrapper = styled.article`
    padding: 2rem 0;
    border-bottom: 1px solid ${theme.colors.gray};
`;