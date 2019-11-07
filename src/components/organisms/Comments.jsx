import React, { useState } from 'react';
import styled from 'styled-components';

const Comments = ({ productId }) => {
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');

    const allComments = JSON.parse(localStorage.getItem('comments')) || [];
    const productComments = allComments.find(comments => comments.productId === productId) || [];

    const submitComment = () => {
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
    const comments = productComments && productComments.comments &&
        productComments.comments.sort((curr, prev) => curr.id < prev.id ? 1 : -1);
    return (
        <>
            <h2>Comments</h2>
            <InputWrapper>
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
                {comments ? comments.map((comment) => (
                        <CommentWrapper key={comment.id}>
                            <Name>{comment.name}</Name>
                            <hr />
                            <p>{comment.comment}</p>
                        </CommentWrapper>
                    )) : <p>No comments for this product yet!</p>
                }
            </CommentsList>
        </>
    )
}

export default Comments;

const InputWrapper = styled.div`
    width: 100%;
`;

const Input = styled.input``;

const Textarea = styled.textarea`
    width: 100%;
    height: 100px;
    font-size: 1.1rem;
    font-family: Helvetica, Arial, Helvetica, sans-serif;
`;

const Submit = styled.button`
    margin-top: 1rem;
    padding: 1rem;
    border: 0;
    background-color: blue;
    color: white;
    right: 0;
`;

const Name = styled.h4``;

const CommentsList = styled.div``;

const CommentWrapper = styled.article``;