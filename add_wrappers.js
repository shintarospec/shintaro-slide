const fs = require('fs');

const content = fs.readFileSync('App.tsx', 'utf8');

// スライド2-23までの開始部分を探して置換
let modified = content;

// Slide 2はすでに修正済みなので、終わりのタグを追加
for (let i = 2; i <= 23; i++) {
  const slideComment = `{/* SLIDE ${i}`;
  const nextSlideComment = i < 23 ? `{/* SLIDE ${i + 1}` : `</div>
    </div>
  );
};

export default App;`;
  
  // 各スライドの</Slide>を</Slide></div></div>に置換
  const slideEndPattern = new RegExp(`(</Slide>)\\s*\\n\\s*(${slideComment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}|${i === 23 ? 'export default' : nextSlideComment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g');
  
  if (i === 2) {
    // Slide 2 は開始タグは追加済みなので終了タグのみ
    continue;
  }
  
  // 開始タグ追加: {/* SLIDE X */} の次の <Slide の前に <div style={wrapperStyle}><div style={scalerStyle}> を追加
  const startPattern = new RegExp(`(${slideComment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^}]*}\\s*\\n)(\\s*<Slide)`, 'g');
  modified = modified.replace(startPattern, `$1        <div style={wrapperStyle}><div style={scalerStyle}>\n$2`);
}

// すべてのスライドの</Slide>の後に</div></div>を追加（すでに追加済みのものは除く）
modified = modified.replace(/(</Slide>)(\s*\n\s*{\/\* SLIDE)/g, '$1\n        </div></div>\n\n$2');

// 最後のスライドの終了
modified = modified.replace(/(</Slide>)(\s*\n\s*<\/div>)/g, '$1\n        </div></div>$2');

fs.writeFileSync('App.tsx', modified);
console.log('Wrappers added successfully!');
