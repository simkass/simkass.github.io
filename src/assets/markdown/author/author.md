# Basic Principle

Historically famous writers all have a unique literary style. Avid readers can quickly identify an author from a short sample of their writing. The use of specific words and most importantly **specific combinations of words** is what allows us to recognize an author’s work. For example, you can easily guess that the following lines were written by Shakespeare.

> Thou wilt be like a lover presently,
And tire the hearer with a book of words.
> 

The use of older English words like *thou* and *wilt* are a clear indication of that. Shakespeare is obviously not the only writer that does that. However, if I were to ask you whether the lines were written by Shakespeare or Twain, you’d most likely be able to give me a confident answer as Twain doesn’t really use this vocabulary. Therefore, we will focus on how to identify an author from an unseen text sample using a database of known authors.

Suppose our database consists of Shakespeare’s *Much Ado About Nothing* and *A Connecticut Yankee in King Arthur’s Court* by Mark Twain. Suppose we now want to identify the author of this very short sentence.

> I pray you, speak not
> 

Let’s first analyze the word *pray.* We have in our database 4600 lines written by Shakespeare. In those lines, this word appears 35 times meaning it is used once every 132 lines. In our Mark Twain database, it’s used 11 times over 13000 lines or once every 1200 lines. The word is used almost ten times more often by Shakespeare than by Twain. This is already a major clue helping us guess that Shakespeare wrote this sentence. But how can we make a more accurate guess? After all, Twain does use the word *pray* on a few occasions*,* there is a non-negligible chance that this sentence is one of those occasions. 

To make a more confident guess, we go back to our mention of **specific combinations of words**. On its own, *pray* does not contain enough information to identify the author with a considerable degree of certainty. However, when we study the combination of the words *pray* and *you,* we get a different story. In his 35 uses of the word *pray*, William Shakespeare follows it up with *you* on 16 different occasions. In *A Connecticut Yankee in King Arthur’s Court* this combination doesn’t appear once! 

We get a similar story when analyzing the word *speak*. Both authors use this word on numerous occasions. However, Mark Twain never writes it before the word *not* whereas Shakespeare wrote *speak not* on two different occasions in our database. We can now very confidently say that the sentence was written by William Shakespeare which would be correct since it was taken from *Macbeth*.

# Modeling Relationships Between Words

To code this concept, we need to build a database that maps the relationships between words. Not only do we need to map all words with their rate of occurrence, but we also need to represent the probability that one word follows another.

Thankfully, in the early 20th-century Russian mathematician [Andrey Markov](https://en.wikipedia.org/wiki/Andrey_Markov) came up with a stochastic model that does exactly that.

> A **[Markov chain](https://en.wikipedia.org/wiki/Markov_chain)** or **Markov process** is a [stochastic model](https://en.wikipedia.org/wiki/Stochastic_model) describing a [sequence](https://en.wikipedia.org/wiki/Sequence) of possible events in which the probability of each event depends only on the state attained in the previous event.
> 

![Two state Markov chain example](Author%20Recognition%20Algorithm%200c3a71f87e60475b90d963ae92efd97e/Untitled.png)

Two state Markov chain example

In this image, we understand that when in state E, our system has a 30% chance of going into another state E and a 70% chance of changing to a state A. Let’s see what a Markov chain would look like for a specific database.

Suppose our database is made up of 3 unique phrases built with 5 different words along with their number of occurrences:

| Phrases | Occurrences |
| --- | --- |
| I love you | 2 |
| I love cheese | 1 |
| I hate you | 1 |

The Markov chain would be the following 5 state model.

![Untitled](Author%20Recognition%20Algorithm%200c3a71f87e60475b90d963ae92efd97e/Untitled%201.png)

# Coding the Model

The database will consist of a series of nodes from our Markov chain. We will represent nodes using a Python class we will name Word. Its first parameter will be a string to represent the actual textual word. We also need to keep track of its number of occurrences using a count variable.

```python
class Word:
    def __init__(self, word: str):
        self.word = word
				self.count = 1
```

To map the relationships between our nodes, every Word object will have a dictionary storing the possible words that could follow. 

```python
class Word:
    def __init__(self, word: str):
        self.word = word
        self.count = 1
        self.following_words = {}

def add_following_word(self, word: str):
        self.following_words[word] = 1
```

As you can see, we add a word to the dictionary by giving a string and mapping it to a number of occurrences initialized to 1. We now need to add methods to increment the count of both the word itself and its following words. 

```python
class Word:
    def __init__(self, word: str):
        self.word = word
        self.count = 1
        self.following_words = {}

    def increment_count(self):
        self.count += 1

    def get_count(self):
        return self.count

    def add_following_word(self, word: str):
        self.following_words[word] = 1

    def increment_following_word(self, word: str):
        self.following_words[word] += 1
```

# Building the Database

Using **[Project Gutenberg](https://www.gutenberg.org/),** I gathered books in .txt format from various famous writers and chose one as the test for each author. 

![Untitled](Author%20Recognition%20Algorithm%200c3a71f87e60475b90d963ae92efd97e/Untitled%202.png)

An AuthorCollection object is then created for every writer. The code behind the AuthorCollection class is shown below. What it does is read all .txt files of a specific author and build the Markov chain word by word using the class we built earlier.

```python
class AuthorCollection:
    def __init__(self, author, test=False):
        self.subfolder = 'test/' if test else 'train/'
        self.author = author
        self.files = []
        self.dictionary = {}
        self.open_files()
        self.build_dictionary()

    def open_files(self):
        filenames = os.listdir('texts/' + self.subfolder + self.author)
        for filename in filenames:
            f = open('texts/' + self.subfolder + self.author + '/' + filename, encoding='utf8')
            self.files.append(f)

    def build_dictionary(self):
        for f in self.files:

            previous_word = None
            line = f.readline()

            while line:
                line_words = utils.format_line(line)
                for word in line_words:
                    previous_word = self.add_to_dictionary(word, previous_word)
                line = f.readline()
            f.close()

    def add_to_dictionary(self, word, previous_word):
        if word not in self.dictionary.keys():
            self.dictionary[word] = Word(word)
        else:
            self.dictionary[word].increment_count()

        if previous_word != None:
            if word not in self.dictionary[previous_word].get_following_words().keys():
                self.dictionary[previous_word].add_following_word(word)
            else:
                self.dictionary[previous_word].increment_following_word(word)
        return word
```

# Identifying the Writer Behind an Unseen Text

The first step is to build an AuthorCollection object with the unseen text. The second step is to evaluate the similarity between this collection and all the collections in our database. We then identify the writer by finding the collection most similar to our unseen text.

To evaluate the similarity between two collections, we begin by identifying all common words. 

```python
def evaluate_similarity(author1_collection, author2_collection):
    common_words = [word for word in author2_collection.dictionary.keys() if word in author1_collection.dictionary.keys()]
```

We then count the occurrences of all common words for each collection.

```python
def evaluate_similarity(author1_collection, author2_collection):
    common_words = [word for word in author2_collection.dictionary.keys() if word in author1_collection.dictionary.keys()]

    similarity, common_words_total_a1, common_words_total_a2 = 0, 0, 0
    for word in common_words:
        common_words_total_a1 += author1_collection.dictionary[word].get_count()
        common_words_total_a2 += author2_collection.dictionary[word].get_count()
```

The next step is to normalize the count of every common word by dividing it by our newly calculated total for each collection. This will give us 2 variables $a_{1i}$ and $a_{2i}$ where $i$ represent the index in the common words list.

Using these variables, we can calculate the similarity using the following equation.

$$
\sqrt{\left(\sum_{i=0}^{N}\left(a_{1i}-a_{2i}\right)^{2}\right)}
$$

Where N is the number of common words. The smaller the result, the more similar both text are. To make it more intuitive, we will divide the result by one so that the highest number represent the most similarity.

```python
def evaluate_similarity(author1_collection, author2_collection):
    common_words = [word for word in author2_collection.dictionary.keys() if word in author1_collection.dictionary.keys()]

    similarity, common_words_total_a1, common_words_total_a2 = 0, 0, 0
    for word in common_words:
        common_words_total_a1 += author1_collection.dictionary[word].get_count()
        common_words_total_a2 += author2_collection.dictionary[word].get_count()

    for word in common_words:
        a1i = (author1_collection.dictionary[word].get_count() / common_words_total_a1)
        a2i = (author2_collection.dictionary[word].get_count() / common_words_total_a2)
        similarity += pow(a2i - a1i, 2)

    similarity = round(1 / math.sqrt(similarity), 3)
    return similarity
```

# Result

Running the code will try to identify the chosen test data for each writer. The result is printed in the console and is shown below.

```
----------------------------------------------------------
Similarity between unseen text and Agatha Christie: 49.927
Similarity between unseen text and Arthur Conan Doyle: 22.07
Similarity between unseen text and Charles Dickens: 24.773
Similarity between unseen text and Jane Austen: 23.545
Similarity between unseen text and Mark Twain: 18.992
Similarity between unseen text and Oscar Wilde: 24.989
Similarity between unseen text and William Shakespeare: 15.994
Similarity between unseen text and William Somerset: 35.22
Mystery author successfully identified as Agatha Christie
----------------------------------------------------------
Similarity between unseen text and Agatha Christie: 33.42
Similarity between unseen text and Arthur Conan Doyle: 41.961
Similarity between unseen text and Charles Dickens: 42.186
Similarity between unseen text and Jane Austen: 24.675
Similarity between unseen text and Mark Twain: 29.785
Similarity between unseen text and Oscar Wilde: 30.124
Similarity between unseen text and William Shakespeare: 19.618
Similarity between unseen text and William Somerset: 33.514
Mystery author wrongly identified as Charles Dickens
Mystery author is actually Arthur Conan Doyle
----------------------------------------------------------
Similarity between unseen text and Agatha Christie: 37.217
Similarity between unseen text and Arthur Conan Doyle: 25.004
Similarity between unseen text and Charles Dickens: 37.809
Similarity between unseen text and Jane Austen: 27.586
Similarity between unseen text and Mark Twain: 25.351
Similarity between unseen text and Oscar Wilde: 30.464
Similarity between unseen text and William Shakespeare: 22.208
Similarity between unseen text and William Somerset: 32.061
Mystery author successfully identified as Charles Dickens
----------------------------------------------------------
Similarity between unseen text and Agatha Christie: 23.616
Similarity between unseen text and Arthur Conan Doyle: 20.413
Similarity between unseen text and Charles Dickens: 31.603
Similarity between unseen text and Jane Austen: 64.625
Similarity between unseen text and Mark Twain: 21.829
Similarity between unseen text and Oscar Wilde: 25.951
Similarity between unseen text and William Shakespeare: 20.667
Similarity between unseen text and William Somerset: 28.69
Mystery author successfully identified as Jane Austen
----------------------------------------------------------
Similarity between unseen text and Agatha Christie: 18.05
Similarity between unseen text and Arthur Conan Doyle: 19.93
Similarity between unseen text and Charles Dickens: 27.736
Similarity between unseen text and Jane Austen: 21.48
Similarity between unseen text and Mark Twain: 29.428
Similarity between unseen text and Oscar Wilde: 20.31
Similarity between unseen text and William Shakespeare: 18.657
Similarity between unseen text and William Somerset: 25.481
Mystery author successfully identified as Mark Twain
----------------------------------------------------------
Similarity between unseen text and Agatha Christie: 16.754
Similarity between unseen text and Arthur Conan Doyle: 11.639
Similarity between unseen text and Charles Dickens: 14.083
Similarity between unseen text and Jane Austen: 15.516
Similarity between unseen text and Mark Twain: 11.599
Similarity between unseen text and Oscar Wilde: 22.895
Similarity between unseen text and William Shakespeare: 18.374
Similarity between unseen text and William Somerset: 13.859
Mystery author successfully identified as Oscar Wilde
----------------------------------------------------------
Similarity between unseen text and Agatha Christie: 17.617
Similarity between unseen text and Arthur Conan Doyle: 13.666
Similarity between unseen text and Charles Dickens: 16.806
Similarity between unseen text and Jane Austen: 17.332
Similarity between unseen text and Mark Twain: 14.397
Similarity between unseen text and Oscar Wilde: 22.53
Similarity between unseen text and William Shakespeare: 40.258
Similarity between unseen text and William Somerset: 15.766
Mystery author successfully identified as William Shakespeare
----------------------------------------------------------
Similarity between unseen text and Agatha Christie: 22.577
Similarity between unseen text and Arthur Conan Doyle: 16.455
Similarity between unseen text and Charles Dickens: 22.905
Similarity between unseen text and Jane Austen: 29.158
Similarity between unseen text and Mark Twain: 17.918
Similarity between unseen text and Oscar Wilde: 22.313
Similarity between unseen text and William Shakespeare: 17.089
Similarity between unseen text and William Somerset: 34.775
Mystery author successfully identified as William Somerset
```

As you can see, the algorithm does a good job at identifying the various writers. The only misidentification is between Charles Dickens and Arthur Conan Doyle.

I don’t want to claim that this algorithm is powerful, I just believe that it’s an interesting introduction to Markov chains and basic text analysis. This algorithm would probably have a low rate of success if the database consisted of writers with similar literary styles. If you’re looking for the state of the art methods in author identifications, you might want to look into [more advanced natural language processing techniques.](https://towardsdatascience.com/a-machine-learning-approach-to-author-identification-of-horror-novels-from-text-snippets-3f1ef5dba634)