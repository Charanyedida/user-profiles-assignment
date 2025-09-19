import React, { useState, useEffect } from 'react';
import { 
  Card, 
  Row, 
  Col, 
  Button, 
  Modal, 
  Input, 
  Spin, 
  Avatar, 
  Typography, 
  Space,
  message,
  Divider
} from 'antd';
import { 
  EditOutlined, 
  DeleteOutlined, 
  HeartOutlined, 
  HeartFilled,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  BankOutlined,
  EnvironmentOutlined,
  UserOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

// UserCard Component
const UserCard = ({ user, onEdit, onDelete, onToggleLike, likedUsers }) => {
  const isLiked = likedUsers.includes(user.id);
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

  const cardActions = [
    <Button 
      type="text" 
      icon={isLiked ? <HeartFilled style={{ color: '#ff4d4f' }} /> : <HeartOutlined />}
      onClick={() => onToggleLike(user.id)}
    >
      {isLiked ? 'Liked' : 'Like'}
    </Button>,
    <Button 
      type="text" 
      icon={<EditOutlined />}
      onClick={() => onEdit(user)}
    >
      Edit
    </Button>,
    <Button 
      type="text" 
      danger
      icon={<DeleteOutlined />}
      onClick={() => onDelete(user.id)}
    >
      Delete
    </Button>
  ];

  return (
    <Card
      hoverable
      actions={cardActions}
      style={{ height: '100%' }}
    >
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <Avatar 
          size={80} 
          src={avatarUrl}
          icon={<UserOutlined />}
          style={{ marginBottom: 12 }}
        />
        <Title level={4} style={{ margin: 0 }}>{user.name}</Title>
        <Text type="secondary">@{user.username}</Text>
      </div>
      
      <Divider />
      
      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        <div>
          <MailOutlined style={{ marginRight: 8, color: '#1890ff' }} />
          <Text>{user.email}</Text>
        </div>
        <div>
          <PhoneOutlined style={{ marginRight: 8, color: '#52c41a' }} />
          <Text>{user.phone}</Text>
        </div>
        <div>
          <GlobalOutlined style={{ marginRight: 8, color: '#722ed1' }} />
          <Text>{user.website}</Text>
        </div>
        <div>
          <BankOutlined style={{ marginRight: 8, color: '#fa8c16' }} />
          <Text>{user.company.name}</Text>
        </div>
        <div>
          <EnvironmentOutlined style={{ marginRight: 8, color: '#eb2f96' }} />
          <Text>{user.address.city}, {user.address.zipcode}</Text>
        </div>
      </Space>
    </Card>
  );
};

// EditUserModal Component
const EditUserModal = ({ visible, user, onCancel, onSave }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        companyName: user.company.name,
        city: user.address.city,
        zipcode: user.address.zipcode,
        street: user.address.street,
        suite: user.address.suite
      });
    }
  }, [user]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const updatedUser = {
      ...user,
      name: formData.name,
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      website: formData.website,
      company: {
        ...user.company,
        name: formData.companyName
      },
      address: {
        ...user.address,
        city: formData.city,
        zipcode: formData.zipcode,
        street: formData.street,
        suite: formData.suite
      }
    };
    
    onSave(updatedUser);
    message.success('User updated successfully!');
    setLoading(false);
  };

  return (
    <Modal
      title="Edit User"
      open={visible}
      onCancel={onCancel}
      onOk={handleSave}
      confirmLoading={loading}
      width={600}
      okText="Save Changes"
      cancelText="Cancel"
    >
      <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <Row gutter={16} style={{ marginBottom: 16 }}>
          <Col span={12}>
            <div>
              <Text strong>Full Name</Text>
              <Input 
                value={formData.name} 
                onChange={(e) => handleInputChange('name', e.target.value)}
                style={{ marginTop: 4 }}
              />
            </div>
          </Col>
          <Col span={12}>
            <div>
              <Text strong>Username</Text>
              <Input 
                value={formData.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                style={{ marginTop: 4 }}
              />
            </div>
          </Col>
        </Row>
        
        <Row gutter={16} style={{ marginBottom: 16 }}>
          <Col span={12}>
            <div>
              <Text strong>Email</Text>
              <Input 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                style={{ marginTop: 4 }}
              />
            </div>
          </Col>
          <Col span={12}>
            <div>
              <Text strong>Phone</Text>
              <Input 
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                style={{ marginTop: 4 }}
              />
            </div>
          </Col>
        </Row>
        
        <div style={{ marginBottom: 16 }}>
          <Text strong>Website</Text>
          <Input 
            value={formData.website}
            onChange={(e) => handleInputChange('website', e.target.value)}
            style={{ marginTop: 4 }}
          />
        </div>
        
        <div style={{ marginBottom: 16 }}>
          <Text strong>Company Name</Text>
          <Input 
            value={formData.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
            style={{ marginTop: 4 }}
          />
        </div>
        
        <Row gutter={16} style={{ marginBottom: 16 }}>
          <Col span={8}>
            <div>
              <Text strong>City</Text>
              <Input 
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                style={{ marginTop: 4 }}
              />
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text strong>Zipcode</Text>
              <Input 
                value={formData.zipcode}
                onChange={(e) => handleInputChange('zipcode', e.target.value)}
                style={{ marginTop: 4 }}
              />
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text strong>Street</Text>
              <Input 
                value={formData.street}
                onChange={(e) => handleInputChange('street', e.target.value)}
                style={{ marginTop: 4 }}
              />
            </div>
          </Col>
        </Row>
        
        <div style={{ marginBottom: 16 }}>
          <Text strong>Suite</Text>
          <Input 
            value={formData.suite}
            onChange={(e) => handleInputChange('suite', e.target.value)}
            style={{ marginTop: 4 }}
          />
        </div>
      </div>
    </Modal>
  );
};

// Main App Component
const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [likedUsers, setLikedUsers] = useState([]);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        
        const userData = await response.json();
        setUsers(userData);
        message.success('Users loaded successfully!');
      } catch (error) {
        message.error('Failed to load users: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle edit user
  const handleEditUser = (user) => {
    setEditingUser(user);
    setModalVisible(true);
  };

  // Handle save user changes
  const handleSaveUser = (updatedUser) => {
    setUsers(users.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    ));
    setModalVisible(false);
    setEditingUser(null);
  };

  // Handle delete user
  const handleDeleteUser = (userId) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this user?',
      content: 'This action cannot be undone.',
      okText: 'Yes, Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        setUsers(users.filter(user => user.id !== userId));
        setLikedUsers(likedUsers.filter(id => id !== userId));
        message.success('User deleted successfully!');
      }
    });
  };

  // Handle toggle like
  const handleToggleLike = (userId) => {
    if (likedUsers.includes(userId)) {
      setLikedUsers(likedUsers.filter(id => id !== userId));
    } else {
      setLikedUsers([...likedUsers, userId]);
    }
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh' 
      }}>
        <Spin size="large" tip="Loading users..." />
      </div>
    );
  }

  return (
    <div style={{ padding: '24px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Title level={1} style={{ color: '#1890ff', marginBottom: 8 }}>
            User Profiles Dashboard
          </Title>
          <Paragraph style={{ fontSize: '16px', color: '#666' }}>
            Manage and interact with our community members
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {users.map(user => (
            <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
              <UserCard
                user={user}
                onEdit={handleEditUser}
                onDelete={handleDeleteUser}
                onToggleLike={handleToggleLike}
                likedUsers={likedUsers}
              />
            </Col>
          ))}
        </Row>

        <div style={{ textAlign: 'center', marginTop: 48, padding: '24px' }}>
          <Text type="secondary">
            Showing {users.length} users • {likedUsers.length} liked • Data from JSONPlaceholder API
          </Text>
        </div>

        <EditUserModal
          visible={modalVisible}
          user={editingUser}
          onCancel={() => {
            setModalVisible(false);
            setEditingUser(null);
          }}
          onSave={handleSaveUser}
        />
      </div>
    </div>
  );
};

export default App;