{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red71\green137\blue205;\red255\green255\blue255;\red202\green202\blue202;
\red254\green255\blue10;\red141\green212\blue254;\red194\green126\blue101;\red212\green212\blue212;\red167\green197\blue151;
}
{\*\expandedcolortbl;;\cssrgb\c33936\c61427\c84130;\cssrgb\c100000\c100000\c100000\c0;\cssrgb\c83229\c83229\c83125;
\cssrgb\c99555\c99475\c0;\cssrgb\c61361\c86489\c99746;\cssrgb\c80778\c56830\c46925;\cssrgb\c86370\c86370\c86262;\cssrgb\c71008\c80807\c65805;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs36 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function\cf4 \strokec4  sym\cf5 \strokec5 (\cf6 \strokec6 ...\cf4 \strokec4 args\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
  console\cf6 \strokec6 .\cf4 \strokec4 log\cf5 \strokec5 (\cf7 \strokec7 '1'\cf6 \strokec6 ,\cf4 \strokec4  args\cf5 \strokec5 )\cf4 \strokec4 \
  \cf2 \strokec2 let\cf4 \strokec4  arr \cf6 \strokec6 =\cf4 \strokec4  \cf8 \strokec8 []\cf4 \strokec4 \
  \cf2 \strokec2 for\cf4 \strokec4  \cf5 \strokec5 (\cf2 \strokec2 let\cf4 \strokec4  n \cf6 \strokec6 =\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 ;\cf4 \strokec4  n \cf8 \strokec8 <\cf4 \strokec4  args\cf6 \strokec6 .\cf4 \strokec4 length\cf6 \strokec6 ;\cf4 \strokec4  n\cf6 \strokec6 ++\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
    arr\cf6 \strokec6 .\cf4 \strokec4 push\cf5 \strokec5 (\cf4 \strokec4 args\cf8 \strokec8 [\cf4 \strokec4 n\cf8 \strokec8 ]\cf6 \strokec6 .\cf4 \strokec4 filter\cf5 \strokec5 ((\cf4 \strokec4 item\cf6 \strokec6 ,\cf4 \strokec4 index\cf5 \strokec5 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  args\cf8 \strokec8 [\cf4 \strokec4 n\cf8 \strokec8 ]\cf6 \strokec6 .\cf4 \strokec4 indexOf\cf5 \strokec5 (\cf4 \strokec4 item\cf5 \strokec5 )\cf4 \strokec4  \cf6 \strokec6 ===\cf4 \strokec4  index\cf5 \strokec5 ))\cf4 \strokec4 \
    \cf5 \strokec5 \}\cf4 \strokec4 \
  \cf2 \strokec2 const\cf4 \strokec4  first \cf6 \strokec6 =\cf4 \strokec4  arr\cf8 \strokec8 [\cf9 \strokec9 0\cf8 \strokec8 ]\cf4 \strokec4 \
  console\cf6 \strokec6 .\cf4 \strokec4 log\cf5 \strokec5 (\cf4 \strokec4 first\cf5 \strokec5 )\cf4 \strokec4 \
  \cf2 \strokec2 const\cf4 \strokec4  second \cf6 \strokec6 =\cf4 \strokec4  arr\cf8 \strokec8 [\cf9 \strokec9 1\cf8 \strokec8 ]\cf4 \strokec4 \
  \cf2 \strokec2 for\cf4 \strokec4  \cf5 \strokec5 (\cf2 \strokec2 let\cf4 \strokec4  i \cf6 \strokec6 =\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 ;\cf4 \strokec4  i \cf8 \strokec8 <\cf4 \strokec4  first\cf6 \strokec6 .\cf4 \strokec4 length\cf6 \strokec6 ;\cf4 \strokec4  i\cf6 \strokec6 ++\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
    \cf2 \strokec2 for\cf4 \strokec4  \cf5 \strokec5 (\cf2 \strokec2 let\cf4 \strokec4  j \cf6 \strokec6 =\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 ;\cf4 \strokec4  j \cf8 \strokec8 <\cf4 \strokec4  second\cf6 \strokec6 .\cf4 \strokec4 length\cf6 \strokec6 ;\cf4 \strokec4  j\cf6 \strokec6 ++\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
      \cf2 \strokec2 if\cf4 \strokec4  \cf5 \strokec5 (\cf4 \strokec4 first\cf8 \strokec8 [\cf4 \strokec4 i\cf8 \strokec8 ]\cf4 \strokec4  \cf6 \strokec6 ==\cf4 \strokec4  second\cf8 \strokec8 [\cf4 \strokec4 j\cf8 \strokec8 ]\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
        first\cf6 \strokec6 .\cf4 \strokec4 splice\cf5 \strokec5 (\cf4 \strokec4 i\cf6 \strokec6 ,\cf9 \strokec9 1\cf6 \strokec6 ,\cf7 \strokec7 'a'\cf5 \strokec5 )\cf4 \strokec4 \
        console\cf6 \strokec6 .\cf4 \strokec4 log\cf5 \strokec5 (\cf7 \strokec7 "first"\cf6 \strokec6 ,\cf4 \strokec4  first\cf5 \strokec5 )\cf4 \strokec4 \
        second\cf6 \strokec6 .\cf4 \strokec4 splice\cf5 \strokec5 (\cf4 \strokec4 j\cf6 \strokec6 ,\cf9 \strokec9 1\cf6 \strokec6 ,\cf7 \strokec7 'a'\cf5 \strokec5 )\cf4 \strokec4 \
        console\cf6 \strokec6 .\cf4 \strokec4 log\cf5 \strokec5 (\cf7 \strokec7 'second'\cf6 \strokec6 ,\cf4 \strokec4  second\cf5 \strokec5 )\cf4 \strokec4 \
      \cf5 \strokec5 \}\cf4 \strokec4 \
    \cf5 \strokec5 \}\cf4 \strokec4 \
  \cf5 \strokec5 \}\cf4 \strokec4 \
  \cf2 \strokec2 const\cf4 \strokec4  result \cf6 \strokec6 =\cf4 \strokec4  first\cf6 \strokec6 .\cf4 \strokec4 concat\cf5 \strokec5 (\cf4 \strokec4 second\cf5 \strokec5 )\cf6 \strokec6 .\cf4 \strokec4 filter\cf5 \strokec5 (\cf4 \strokec4 element \cf6 \strokec6 =>\cf4 \strokec4  element \cf6 \strokec6 !=\cf4 \strokec4  \cf7 \strokec7 'a'\cf5 \strokec5 )\cf6 \strokec6 ;\cf4 \strokec4 \
  arr\cf6 \strokec6 .\cf4 \strokec4 splice\cf5 \strokec5 (\cf9 \strokec9 0\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 2\cf6 \strokec6 ,\cf4 \strokec4  result\cf5 \strokec5 )\cf6 \strokec6 ;\cf4 \strokec4 \
  console\cf6 \strokec6 .\cf4 \strokec4 log\cf5 \strokec5 (\cf7 \strokec7 'post splice'\cf6 \strokec6 ,\cf4 \strokec4  arr\cf5 \strokec5 )\cf6 \strokec6 ;\cf4 \strokec4 \
  \cf2 \strokec2 if\cf4 \strokec4  \cf5 \strokec5 (\cf4 \strokec4 arr\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 ===\cf4 \strokec4  \cf9 \strokec9 1\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
    \cf2 \strokec2 return\cf4 \strokec4  result\
  \cf5 \strokec5 \}\cf4 \strokec4  \cf2 \strokec2 else\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
    \cf2 \strokec2 return\cf4 \strokec4  sym\cf5 \strokec5 (\cf6 \strokec6 ...\cf4 \strokec4 arr\cf5 \strokec5 )\cf4 \strokec4 \
  \cf5 \strokec5 \}\cf4 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \strokec5 \}\cf4 \strokec4 \
\
\
console\cf6 \strokec6 .\cf4 \strokec4 log\cf5 \strokec5 (\cf7 \strokec7 "result"\cf6 \strokec6 ,\cf4 \strokec4  sym\cf5 \strokec5 (\cf8 \strokec8 [\cf9 \strokec9 3\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 3\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 3\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 2\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 5\cf8 \strokec8 ]\cf6 \strokec6 ,\cf4 \strokec4  \cf8 \strokec8 [\cf9 \strokec9 2\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 1\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 5\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 7\cf8 \strokec8 ]\cf6 \strokec6 ,\cf4 \strokec4  \cf8 \strokec8 [\cf9 \strokec9 3\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 4\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 6\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 6\cf8 \strokec8 ]\cf6 \strokec6 ,\cf4 \strokec4  \cf8 \strokec8 [\cf9 \strokec9 1\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 2\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 3\cf8 \strokec8 ]\cf6 \strokec6 ,\cf4 \strokec4  \cf8 \strokec8 [\cf9 \strokec9 5\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 3\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 9\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 8\cf8 \strokec8 ]\cf6 \strokec6 ,\cf4 \strokec4  \cf8 \strokec8 [\cf9 \strokec9 1\cf8 \strokec8 ]\cf5 \strokec5 ))\cf6 \strokec6 ;\cf4 \strokec4 \
}