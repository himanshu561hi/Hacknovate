// Run this once to populate your MongoDB with skills, questions, and content
// Command: node seed.js

require('dotenv').config();
const mongoose = require('mongoose');
const SkillNode = require('./models/SkillNode');
const AssessmentQuestion = require('./models/AssessmentQuestion');
const LearningContent = require('./models/LearningContent');

const seed = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('✅ Connected to MongoDB');

  // Clear existing data
  await SkillNode.deleteMany({});
  await AssessmentQuestion.deleteMany({});
  await LearningContent.deleteMany({});
  console.log('🗑️ Cleared existing seed data');

  // ─── STEP 1: Create Skills (no prerequisites first) ──────────────────────
  const algebra = await SkillNode.create({ name: 'Algebra', subject: 'Math', difficulty: 1, prerequisites: [] });
  const statistics = await SkillNode.create({ name: 'Statistics', subject: 'Math', difficulty: 2, prerequisites: [algebra._id] });
  const linearAlgebra = await SkillNode.create({ name: 'Linear Algebra', subject: 'Math', difficulty: 3, prerequisites: [algebra._id] });
  const pythonBasics = await SkillNode.create({ name: 'Python Basics', subject: 'Programming', difficulty: 1, prerequisites: [] });
  const dataStructures = await SkillNode.create({ name: 'Data Structures', subject: 'Programming', difficulty: 2, prerequisites: [pythonBasics._id] });
  const algorithms = await SkillNode.create({ name: 'Algorithms', subject: 'Programming', difficulty: 3, prerequisites: [dataStructures._id] });
  const mlFundamentals = await SkillNode.create({ name: 'ML Fundamentals', subject: 'AI', difficulty: 3, prerequisites: [statistics._id, pythonBasics._id] });
  const neuralNetworks = await SkillNode.create({ name: 'Neural Networks', subject: 'AI', difficulty: 4, prerequisites: [mlFundamentals._id, linearAlgebra._id] });
  const nlp = await SkillNode.create({ name: 'Natural Language Processing', subject: 'AI', difficulty: 4, prerequisites: [neuralNetworks._id] });
  const reinforcementLearning = await SkillNode.create({ name: 'Reinforcement Learning', subject: 'AI', difficulty: 5, prerequisites: [mlFundamentals._id, algorithms._id] });

  const skills = [algebra, statistics, linearAlgebra, pythonBasics, dataStructures, algorithms, mlFundamentals, neuralNetworks, nlp, reinforcementLearning];
  console.log(`✅ Created ${skills.length} skill nodes`);

  // ─── STEP 2: Assessment Questions (3 per skill) ───────────────────────────
  const questions = [
    // Algebra
    { skill_id: algebra._id, question_text: 'What is the solution to 2x + 4 = 10?', option_a: 'x = 2', option_b: 'x = 3', option_c: 'x = 4', option_d: 'x = 5', correct_option: 'b' },
    { skill_id: algebra._id, question_text: 'Which of the following is a quadratic equation?', option_a: '2x + 3 = 0', option_b: 'x² + 3x + 2 = 0', option_c: '3x - 1 = 5', option_d: 'x/2 = 4', correct_option: 'b' },
    { skill_id: algebra._id, question_text: 'What is the slope of the line y = 3x + 7?', option_a: '7', option_b: '3x', option_c: '3', option_d: '10', correct_option: 'c' },
    // Statistics
    { skill_id: statistics._id, question_text: 'What does the mean of a dataset represent?', option_a: 'The most frequent value', option_b: 'The middle value', option_c: 'The average value', option_d: 'The range of values', correct_option: 'c' },
    { skill_id: statistics._id, question_text: 'A dataset has values [2, 4, 4, 4, 5, 5, 7, 9]. What is the mode?', option_a: '5', option_b: '4', option_c: '7', option_d: '2', correct_option: 'b' },
    { skill_id: statistics._id, question_text: 'What does a p-value less than 0.05 typically indicate?', option_a: 'The result is not significant', option_b: 'The null hypothesis is true', option_c: 'The result is statistically significant', option_d: 'The sample size is too small', correct_option: 'c' },
    // Linear Algebra
    { skill_id: linearAlgebra._id, question_text: 'What is the result of multiplying a 2x3 matrix by a 3x2 matrix?', option_a: '3x3 matrix', option_b: '2x2 matrix', option_c: '2x3 matrix', option_d: '3x2 matrix', correct_option: 'b' },
    { skill_id: linearAlgebra._id, question_text: 'What is the determinant of the identity matrix?', option_a: '0', option_b: '-1', option_c: '2', option_d: '1', correct_option: 'd' },
    { skill_id: linearAlgebra._id, question_text: 'What is an eigenvector?', option_a: 'A vector that changes direction under a transformation', option_b: 'A vector that only scales under a linear transformation', option_c: 'The diagonal of a matrix', option_d: 'A unit vector', correct_option: 'b' },
    // Python Basics
    { skill_id: pythonBasics._id, question_text: 'Which keyword is used to define a function in Python?', option_a: 'function', option_b: 'func', option_c: 'def', option_d: 'define', correct_option: 'c' },
    { skill_id: pythonBasics._id, question_text: 'What is the output of print(type([]))?', option_a: "<class 'list'>", option_b: "<class 'array'>", option_c: "<class 'tuple'>", option_d: "<class 'dict'>", correct_option: 'a' },
    { skill_id: pythonBasics._id, question_text: 'How do you create a virtual environment in Python?', option_a: 'python create env', option_b: 'python -m venv myenv', option_c: 'pip install venv', option_d: 'virtualenv --create', correct_option: 'b' },
    // Data Structures
    { skill_id: dataStructures._id, question_text: 'What is the time complexity of accessing an element in a Python list by index?', option_a: 'O(n)', option_b: 'O(log n)', option_c: 'O(n²)', option_d: 'O(1)', correct_option: 'd' },
    { skill_id: dataStructures._id, question_text: 'Which data structure uses LIFO (Last In First Out)?', option_a: 'Queue', option_b: 'Stack', option_c: 'Linked List', option_d: 'Tree', correct_option: 'b' },
    { skill_id: dataStructures._id, question_text: 'What is a hash table used for?', option_a: 'Sorting data', option_b: 'Fast key-value lookups', option_c: 'Storing ordered sequences', option_d: 'Graph traversal', correct_option: 'b' },
    // Algorithms
    { skill_id: algorithms._id, question_text: 'What is the time complexity of binary search?', option_a: 'O(n)', option_b: 'O(n²)', option_c: 'O(log n)', option_d: 'O(1)', correct_option: 'c' },
    { skill_id: algorithms._id, question_text: 'Which sorting algorithm has the best average-case time complexity?', option_a: 'Bubble Sort', option_b: 'Insertion Sort', option_c: 'Quick Sort', option_d: 'Selection Sort', correct_option: 'c' },
    { skill_id: algorithms._id, question_text: 'What does BFS stand for in graph algorithms?', option_a: 'Binary First Search', option_b: 'Breadth-First Search', option_c: 'Best-First Search', option_d: 'Backward First Search', correct_option: 'b' },
    // ML Fundamentals
    { skill_id: mlFundamentals._id, question_text: 'What is overfitting in machine learning?', option_a: 'When a model performs well on training data but poorly on new data', option_b: 'When a model is too simple to learn patterns', option_c: 'When training takes too long', option_d: 'When the dataset is too large', correct_option: 'a' },
    { skill_id: mlFundamentals._id, question_text: 'Which of the following is a supervised learning algorithm?', option_a: 'K-Means Clustering', option_b: 'PCA', option_c: 'Linear Regression', option_d: 'Autoencoders', correct_option: 'c' },
    { skill_id: mlFundamentals._id, question_text: 'What is the purpose of a validation set?', option_a: 'To train the model', option_b: 'To tune hyperparameters and prevent overfitting', option_c: 'To test final model performance', option_d: 'To normalize the data', correct_option: 'b' },
    // Neural Networks
    { skill_id: neuralNetworks._id, question_text: 'What is the role of an activation function in a neural network?', option_a: 'To initialize weights', option_b: 'To introduce non-linearity', option_c: 'To normalize inputs', option_d: 'To reduce overfitting', correct_option: 'b' },
    { skill_id: neuralNetworks._id, question_text: 'What does backpropagation do?', option_a: 'Feeds data forward through the network', option_b: 'Calculates gradients to update weights', option_c: 'Initializes the neural network', option_d: 'Removes neurons from the network', correct_option: 'b' },
    { skill_id: neuralNetworks._id, question_text: 'Which activation function is most commonly used in hidden layers of deep networks?', option_a: 'Sigmoid', option_b: 'Tanh', option_c: 'ReLU', option_d: 'Softmax', correct_option: 'c' },
    // NLP
    { skill_id: nlp._id, question_text: 'What does TF-IDF stand for?', option_a: 'Text Frequency - Inverse Document Frequency', option_b: 'Term Frequency - Inverse Document Frequency', option_c: 'Token Frequency - Index Document Format', option_d: 'Text Format - Inverse Data Frequency', correct_option: 'b' },
    { skill_id: nlp._id, question_text: 'What is tokenization in NLP?', option_a: 'Converting text to numbers', option_b: 'Splitting text into individual words or subwords', option_c: 'Removing stop words', option_d: 'Translating text to another language', correct_option: 'b' },
    { skill_id: nlp._id, question_text: 'What architecture is the basis of modern LLMs like GPT?', option_a: 'RNN', option_b: 'LSTM', option_c: 'Transformer', option_d: 'CNN', correct_option: 'c' },
    // Reinforcement Learning
    { skill_id: reinforcementLearning._id, question_text: 'In reinforcement learning, what is a reward?', option_a: 'The initial state of the environment', option_b: 'A signal indicating how good an action was', option_c: 'The policy of the agent', option_d: 'The learning rate', correct_option: 'b' },
    { skill_id: reinforcementLearning._id, question_text: 'What is the exploration-exploitation tradeoff?', option_a: 'Choosing between fast and slow algorithms', option_b: 'Balancing trying new actions vs using known good actions', option_c: 'Deciding between supervised and unsupervised learning', option_d: 'Choosing the right neural network size', correct_option: 'b' },
    { skill_id: reinforcementLearning._id, question_text: 'What does Q-learning optimize?', option_a: 'The probability of each action', option_b: 'The expected cumulative reward (Q-value)', option_c: 'The loss function directly', option_d: 'The number of episodes', correct_option: 'b' },
  ];

  await AssessmentQuestion.insertMany(questions);
  console.log(`✅ Created ${questions.length} assessment questions`);

  // ─── STEP 3: Learning Content (3 per skill) ───────────────────────────────
  const content = [
    // Algebra
    { title: 'Algebra Fundamentals', skill_id: algebra._id, type: 'video', difficulty: 1, url: 'https://www.khanacademy.org/math/algebra', description: 'Introduction to algebraic expressions and equations.' },
    { title: 'Solving Linear Equations', skill_id: algebra._id, type: 'article', difficulty: 1, url: 'https://www.mathsisfun.com/algebra/linear-equations.html', description: 'Step-by-step guide to solving linear equations.' },
    { title: 'Algebra Practice Quiz', skill_id: algebra._id, type: 'quiz', difficulty: 2, url: 'https://www.khanacademy.org/math/algebra/quiz', description: 'Test your algebra skills with interactive problems.' },
    // Statistics
    { title: 'Statistics for Beginners', skill_id: statistics._id, type: 'video', difficulty: 2, url: 'https://www.khanacademy.org/math/statistics-probability', description: 'Core concepts: mean, median, mode, standard deviation.' },
    { title: 'Probability and Distributions', skill_id: statistics._id, type: 'article', difficulty: 2, url: 'https://towardsdatascience.com/probability-distributions', description: 'Understanding probability distributions for data science.' },
    { title: 'Statistics Practice Problems', skill_id: statistics._id, type: 'quiz', difficulty: 3, url: 'https://www.khanacademy.org/math/statistics-probability/quiz', description: 'Practice problems covering descriptive and inferential statistics.' },
    // Linear Algebra
    { title: 'Essence of Linear Algebra', skill_id: linearAlgebra._id, type: 'video', difficulty: 3, url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', description: '3Blue1Brown visual series on linear algebra concepts.' },
    { title: 'Matrices and Transformations', skill_id: linearAlgebra._id, type: 'article', difficulty: 3, url: 'https://mathworld.wolfram.com/Matrix.html', description: 'Deep dive into matrix operations and linear transformations.' },
    { title: 'Linear Algebra Quiz', skill_id: linearAlgebra._id, type: 'quiz', difficulty: 3, url: 'https://www.khanacademy.org/math/linear-algebra/quiz', description: 'Test your understanding of vectors, matrices, and eigenvalues.' },
    // Python Basics
    { title: 'Python for Beginners', skill_id: pythonBasics._id, type: 'video', difficulty: 1, url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', description: 'Complete Python tutorial for absolute beginners.' },
    { title: 'Python Official Tutorial', skill_id: pythonBasics._id, type: 'article', difficulty: 1, url: 'https://docs.python.org/3/tutorial/', description: 'Official Python documentation tutorial covering all basics.' },
    { title: 'Python Basics Quiz', skill_id: pythonBasics._id, type: 'quiz', difficulty: 1, url: 'https://www.w3schools.com/python/python_quiz.asp', description: 'Test your Python fundamentals knowledge.' },
    // Data Structures
    { title: 'Data Structures in Python', skill_id: dataStructures._id, type: 'video', difficulty: 2, url: 'https://www.youtube.com/watch?v=pkYVOmU3MgA', description: 'Visual explanation of lists, stacks, queues, trees, and graphs.' },
    { title: 'Python Data Structures Guide', skill_id: dataStructures._id, type: 'article', difficulty: 2, url: 'https://realpython.com/python-data-structures/', description: 'Comprehensive guide to Python built-in and custom data structures.' },
    { title: 'Data Structures Practice', skill_id: dataStructures._id, type: 'quiz', difficulty: 2, url: 'https://leetcode.com/explore/learn/', description: 'LeetCode learning path for data structures.' },
    // Algorithms
    { title: 'Algorithms Explained', skill_id: algorithms._id, type: 'video', difficulty: 3, url: 'https://www.youtube.com/watch?v=8hly31xKli0', description: 'Visual explanations of sorting and searching algorithms.' },
    { title: 'Big O Notation Guide', skill_id: algorithms._id, type: 'article', difficulty: 3, url: 'https://www.freecodecamp.org/news/big-o-notation-why-it-matters/', description: 'Understanding time and space complexity analysis.' },
    { title: 'Algorithm Challenges', skill_id: algorithms._id, type: 'quiz', difficulty: 3, url: 'https://leetcode.com/problemset/algorithms/', description: 'Practice algorithm problems on LeetCode.' },
    // ML Fundamentals
    { title: 'Machine Learning Crash Course', skill_id: mlFundamentals._id, type: 'video', difficulty: 3, url: 'https://developers.google.com/machine-learning/crash-course', description: "Google's free ML crash course with TensorFlow." },
    { title: 'Intro to Machine Learning', skill_id: mlFundamentals._id, type: 'article', difficulty: 3, url: 'https://towardsdatascience.com/intro-to-machine-learning', description: 'Comprehensive introduction to ML concepts and algorithms.' },
    { title: 'ML Concepts Quiz', skill_id: mlFundamentals._id, type: 'quiz', difficulty: 3, url: 'https://www.kaggle.com/learn/intro-to-machine-learning', description: 'Kaggle interactive ML course with exercises.' },
    // Neural Networks
    { title: 'Neural Networks from Scratch', skill_id: neuralNetworks._id, type: 'video', difficulty: 4, url: 'https://www.youtube.com/watch?v=aircAruvnKk', description: '3Blue1Brown series on how neural networks work.' },
    { title: 'Deep Learning Book', skill_id: neuralNetworks._id, type: 'article', difficulty: 4, url: 'https://www.deeplearningbook.org/', description: 'Free online deep learning textbook by Goodfellow et al.' },
    { title: 'Neural Network Playground', skill_id: neuralNetworks._id, type: 'quiz', difficulty: 4, url: 'https://playground.tensorflow.org/', description: 'Interactive TensorFlow playground to experiment with neural networks.' },
    // NLP
    { title: 'NLP with Python', skill_id: nlp._id, type: 'video', difficulty: 4, url: 'https://www.youtube.com/watch?v=X2vAabgKiuM', description: 'Natural Language Processing tutorial using Python and NLTK.' },
    { title: 'Hugging Face NLP Course', skill_id: nlp._id, type: 'article', difficulty: 4, url: 'https://huggingface.co/learn/nlp-course', description: 'Free NLP course covering transformers and modern NLP techniques.' },
    { title: 'NLP Practice Tasks', skill_id: nlp._id, type: 'quiz', difficulty: 4, url: 'https://www.kaggle.com/learn/natural-language-processing', description: 'Kaggle NLP course with hands-on exercises.' },
    // Reinforcement Learning
    { title: 'Reinforcement Learning Introduction', skill_id: reinforcementLearning._id, type: 'video', difficulty: 5, url: 'https://www.youtube.com/watch?v=2pWv7GOvuf0', description: "DeepMind's introduction to reinforcement learning series." },
    { title: 'Spinning Up in Deep RL', skill_id: reinforcementLearning._id, type: 'article', difficulty: 5, url: 'https://spinningup.openai.com/', description: "OpenAI's educational resource for deep reinforcement learning." },
    { title: 'RL Gym Exercises', skill_id: reinforcementLearning._id, type: 'quiz', difficulty: 5, url: 'https://gymnasium.farama.org/', description: 'OpenAI Gymnasium environments for RL experimentation.' },
  ];

  await LearningContent.insertMany(content);
  console.log(`✅ Created ${content.length} learning content items`);

  console.log('\n🎉 Database seeded successfully!');
  console.log('Skill IDs for reference:');
  skills.forEach((s) => console.log(`  ${s.name}: ${s._id}`));

  await mongoose.disconnect();
  process.exit(0);
};

seed().catch((err) => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});
