import React, { useState } from 'react';
import axios from 'axios';

function ApiChainingDashboard() {
  const [users, setUsers] = useState([]);
  const [postResponse, setPostResponse] = useState(null);
  const [comments, setComments] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [postId, setPostId] = useState(null);
  const [postData, setPostData] = useState({
    title: '',
    body: '',
    userId: null,
  });

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Create New Post
  const createNewPost = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        ...postData,
        userId: selectedUser.id,
      });
      setPostResponse(response.data);
      setPostId(response.data.id);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  // Fetch Comments based on postId
  const fetchComments = async () => {
    if (!postId) return;
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">API Chaining Dashboard</h1>
      
      {/* Step 1: Fetch Users */}
      <div className="mb-6">
        <button className="bg-blue-500 text-white px-4 py-2" onClick={fetchUsers}>
          Fetch Users
        </button>
        {users.length > 0 && (
          <div>
            <h2 className="text-xl mt-4">Select a User:</h2>
            <select
              className="border p-2"
              onChange={(e) => setSelectedUser(users.find(user => user.id === parseInt(e.target.value)))}
            >
              <option value="">Select User</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Step 2: Create Post */}
      {selectedUser && (
        <div className="mb-6">
          <h2 className="text-xl">Create a Post</h2>
          <input
            className="border p-2 mb-2"
            placeholder="Title"
            value={postData.title}
            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          />
          <textarea
            className="border p-2 mb-2"
            placeholder="Body"
            value={postData.body}
            onChange={(e) => setPostData({ ...postData, body: e.target.value })}
          />
          <button className="bg-green-500 text-white px-4 py-2" onClick={createNewPost}>
            Create Post
          </button>

          {postResponse && (
            <div className="mt-4">
              <h2 className="text-xl">Post Created:</h2>
              <pre>{JSON.stringify(postResponse, null, 2)}</pre>
            </div>
          )}
        </div>
      )}

      {/* Step 3: Fetch Comments */}
      {postId && (
        <div className="mb-6">
          <button className="bg-purple-500 text-white px-4 py-2" onClick={fetchComments}>
            Fetch Comments for Post #{postId}
          </button>
          {comments.length > 0 && (
            <div className="mt-4">
              <h2 className="text-xl">Comments:</h2>
              <pre>{JSON.stringify(comments, null, 2)}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ApiChainingDashboard;
